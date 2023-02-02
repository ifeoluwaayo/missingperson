import "../styles/globals.css";
import AppWrapper from "./app-wrapper";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body className="bg-white text-black dark:bg-black dark:text-white">
				<AppWrapper>{children}</AppWrapper>
			</body>
		</html>
	);
}
