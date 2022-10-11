import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function MyApp({ Component, pageProps, router }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	);
}

export default MyApp;
