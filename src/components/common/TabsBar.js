"use client"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { FaHome } from "react-icons/fa"
import { Button } from "../ui/button"
import NavDropdown from "./NavDropdown"
import { useEffect } from "react"

const TabsBar = ({ activeClass }) => {
	const [activeSubItem, setActiveSubItem] = useState(null)
	const pathname = usePathname()

	// handle active item
	const isItemActive = (item) => {
		if (item?.href) return pathname === item?.href
		if (item?.dropdown) return item?.dropdown?.some((subItem) => pathname === subItem?.href)
		return false
	}

	const handleDropdownItemClick = (subItem) => {
		setActiveSubItem(subItem)
	}

	useEffect(() => {
		if (!(activeSubItem && pathname.startsWith(activeSubItem?.href))) {
			setActiveSubItem(null)
		}
	}, [pathname]) // eslint-disable-line

	return (
		<ul className="flex items-center whitespace-normal">
			{siteConfig?.navLinks?.map((item, index) => {
				const isActive = isItemActive(item)
				return (
					<li key={index} className="relative list-none">
						<Button
							variant="ghost"
							asChild={true}
							className={`peer static mr-[22px] rounded-none border-b-4 border-transparent p-0 hover:bg-transparent ${isActive && activeClass}`}
						>
							{renderButtonContent(item)}
						</Button>
						{item?.dropdown?.length > 0 && (
							<NavDropdown
								dropItems={item?.dropdown}
								activeSubItem={activeSubItem}
								onItemClick={handleDropdownItemClick}
							/>
						)}
					</li>
				)
			})}
		</ul>
	)
}
export default TabsBar

const renderButtonContent = (item) => {
	const { href, name, dropdown } = item || {}
	if (href) {
		return (
			<Link prefetch={false} href={href} className="flex items-center justify-between uppercase py-[15px] ">
				{href === "/" && (
					<p className="text-[#fff] text-[16px] mr-[5px]">
						<FaHome />
					</p>
				)}
				<p className="text-[#fff] text-[15px] font-medium">{name}</p>
			</Link>
		)
	} else {
		return (
			<div className={`flex items-center justify-between uppercase py-[15px] cursor-pointer`}>
				<p className="text-[#fff] text-[15px] font-medium">{name}</p>
				{dropdown?.length > 0 && (
					<p className="text-[14px] ml-[8px] text-[#fff]">
						<AiOutlineDown className="relative bottom-[2px]" />
					</p>
				)}
			</div>
		)
	}
}
