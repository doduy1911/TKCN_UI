"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

function ThemeToggle(props) {
	const { resolvedTheme, setTheme } = useTheme()

	return (
		<Button
			variant="ghost"
			onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
			title="Toggle theme"
			{...props}
		>
			<Sun className="text-[#fff] lg:text-[#fff] w-[20px] h-[20px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="text-[#fff] lg:text-[#fff] w-[20px] h-[20px] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}

export default ThemeToggle