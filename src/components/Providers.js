"use client"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }) => {
	return (
		<ThemeProvider enableSystem defaultTheme="light" attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default Providers