module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				eccblue: "#0B63C5",
				eccgreen: "#67B467",
				clearblue: "#F1F7FE",
				darkblue: "#031830",
				white: "#fff",
				"grey-100": "#F0F0F0",
				"grey-200": "#666666",
				"grey-300": "#979797",
				danger: "#EF2E2E",
				"warn-bg": "#FDEDB4",
				"warn-text": "#F0BB00",
				"warn-border": "#F0BB00",
				success: "#4DC768",
				"complaint-success-bg": "#BEFF9F",
				"complaint-success-text": "#079A04",
				"complaint-success-border": "#52FF01",
			},
			backgroundImage: {
				hourglass: "url('/images/hourglass.svg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
