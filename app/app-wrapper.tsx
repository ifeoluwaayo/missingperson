"use client";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function AppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<body>
			<ThemeProvider attribute="class">
				<AnimatePresence mode="wait" initial={true}>
					{children}
				</AnimatePresence>
			</ThemeProvider>
		</body>
	);
}
