"use client"
import Logo from "./common/Logo"
import MobileNavMenu from "./common/MobileNavMenu"
import NavOptions from "./common/NavOptions"
import TabsBar from "./common/TabsBar"
import Image from "next/image"
import bannerMain from "../assets/banner-header/banner-main.jpg"
import ThemeToggle from "./common/ThemeToggle"
import { Button } from "./ui/button" 
import Searchs from "./Searchs"

const Header = () => {
	const activeClass = "border-[#fd0000] text-[#fff] dark:border-white/50 ";

	return (
		<>
			<header className="relative z-[999] xl:flex justify-end	xl:bg-[#89D4FD]">
				<Image
					className="w-full md:h-[150px] h-[100px] object-cover md:object-right object-left xl:max-w-[1400px]"
					src={bannerMain}
					alt="banner main"
				/>
				<div className="container absolute top-0 inset-x-0 z-[3]">
					<div className="flex-center justify-between items-center md:h-[150px] h-[100px]">
						{/* Desktop Only */}
						<Logo className="lg:flex" />
					</div>
				</div>
			</header>
			<div className="lg:sticky lg:h[50px] lg:border-b-[1px] bg-[#0AA4E2] h-[50px] lg:h-[50px] dark:bg-[#1e293b] top-0 z-[999]">
				<div className="container flex justify-between max-lg:hidden h-[55px]">
					<TabsBar activeClass={activeClass} />
					<NavOptions activeClass={activeClass} />
				</div>
				<div className="container lg:hidden h-[50px] flex justify-between items-center">
					<MobileNavMenu /> {/* Mobile Only */}
					<Searchs />
					<Button
						variant="ghost"
						size="icon"
						className="sticky top-0 w-auto p-0 hover:bg-transparent border-b-4 border-transparent"
						asChild
					>
						<ThemeToggle />
					</Button>
				</div>
			</div>
		</>
	)
}

export default Header