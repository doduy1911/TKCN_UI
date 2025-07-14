'use client'
import { siteConfig } from "@/config/site"
import { ChevronDown, ChevronUp, MenuIcon, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "../ui/button"

const MobileNavMenu = () => {
	const activeClass = "text-[#113180] underline font-semibold"
	// Get current path
	const pathname = usePathname()

	// Handle menu open/close/fixed body class
	const [open, setOpen] = useState(false)
	const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null)
	const toggleSubmenu = (index) => {
		setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)
	}
	const handleBodyClass = () => {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = open ? 'hidden' : ''
			document.body.classList.toggle('menu-opened', open)
		}
	}
	const cleanupBodyClass = () => {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = ''
			document.body.classList.remove('menu-opened')
		}
	}

	open ? handleBodyClass() : cleanupBodyClass()

	const handleLinkClick = () => {
		setOpen(false)
		cleanupBodyClass()
	}

	// handle active sub item
	const isItemActive = ({ href, dropdown }) => {
		if (href) return pathname === href
		if (dropdown) return dropdown.some((subItem) => pathname === subItem?.href)
		return false
	}

	// Render nav link menu
	const renderNavLink = ({ name, href, dropdown }, index) => {
		const isSubmenuOpen = openSubmenuIndex === index
		const isDropdownExist = dropdown && dropdown?.length > 0
		const isActive = isItemActive({ href, dropdown })

		return (
			<li key={index} className="relative py-[6px]" onClick={() => dropdown && dropdown?.length > 0 && toggleSubmenu(index)}>
				{href ? (
					<Link href={href} prefetch={false}>
						<span
							className={`text-[15px] dark:text-[#000] uppercase ${isActive ? activeClass : "text-[#000]"}`}
							onClick={handleLinkClick}
						>{name}</span>
					</Link>
				) : (
					<span className={`text-[15px] dark:text-[#000] uppercase ${isActive ? activeClass : "text-[#000]"}`}>{name}</span>
				)}
				{isDropdownExist &&
					((isSubmenuOpen || isActive) ? (
						<ChevronUp className="w-[20px] h-[20px] text-[#000] absolute top-[6px] right-0" />
					) : (
						<ChevronDown className="w-[20px] h-[20px] text-[#000] absolute top-[6px] right-0" />
					))
				}
				{(isSubmenuOpen && dropdown || isActive) && renderSubMenu(dropdown)}
			</li>
		)
	}

	// Render sub menu
	const renderSubMenu = (subMenu) => {
		if (!subMenu || subMenu.length === 0) return null
		return (
			<ul className="pt-[10px] pl-[15px]">
				{subMenu?.map(renderNavLink)}
			</ul>
		)
	}

	return (
		<div className="lg:hidden">
			<Button
				onClick={() => setOpen(!open)}
				className="px-0 rounded-[22px] py-[5px] gap-[5px] h-[30px] bg-transparent dark:bg-slate-800 flex justify-between items-center outline-none	"
			>
				{open ? <X className="w-[22px] h-22px text-[#fff] dark:text-slate-300" /> : <MenuIcon className="w-[22px] h-22px text-[#fff] dark:text-slate-300" />}
				<span className="text-[#fff] text-[15px] dark:text-slate-300 uppercase">Menu</span>
			</Button>
			<div className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[8] w-full h-full lg:pl-0 transition-all duration-500 ease-in left-0 ${open ? "top-[150px] md:top-[200px]" : "top-[-120%]"} bg-[#fff] dark:bg-[#fff]`}
			>
				<ul className="container flex flex-col py-[20px] h-full overflow-auto">
					{siteConfig?.navLinks?.map(renderNavLink)}
				</ul>
			</div>
		</div>
	)
}

export default MobileNavMenu