import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AnimatePresence exitBeforeEnter>
			<GoogleOAuthProvider clientId="805243689186-pe7uljmhc6i38mpvehe4o768ll6nomd4.apps.googleusercontent.com">
				<CookiesProvider>
					<Component
						{...pageProps}
						key={router.route}
					/>
				</CookiesProvider>
			</GoogleOAuthProvider>
		</AnimatePresence>
	);
}

export default MyApp;
