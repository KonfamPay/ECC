import { Html, Head, Main, NextScript } from "next/document";
// import AOS from "aos";
import Script from "next/script"

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
				<script
					src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
					defer
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                      AOS.init();
                  `,
					}}
				></script>
			</body>
		</Html>
	);
}
