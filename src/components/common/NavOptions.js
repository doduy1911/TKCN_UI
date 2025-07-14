"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import ThemeToggle from "./ThemeToggle"
import Searchs from "../Searchs"

function NavOptions({ activeClass }) {
	const pathname = usePathname()

	return (
		<div className="flex items-center gap-[15px] text-[15px]">
			<Button className={`font-medium rounded-none border-b-4 border-transparent p-0 hover:bg-transparent ${pathname === "/gop-y" && activeClass}`}>
				<Link
					prefetch={false}
					href="/gop-y"
					className={`flex h-10 items-center hover:text-[#fff] text-[#fff] text-[15px] px-1`}
				>
					GÓP Ý
				</Link>
			</Button>

			<Searchs />

			<Button
				variant="ghost"
				size="icon"
				className="sticky top-0 w-auto p-0 mb-[1px] hover:bg-transparent border-b-4 border-transparent"
				asChild
			>
				<ThemeToggle />
			</Button>
		</div>
	)
}

export default NavOptions