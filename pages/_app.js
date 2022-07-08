import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import SideMenu from "../components/SideMenu";


function MyApp({ session, Component, pageProps }) {
	return (
		<ThemeProvider
			attribute="class"
			storageKey="theme"
			enableSystem="false"
			defaultTheme="light">
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ThemeProvider>
	);
}

export default MyApp;
