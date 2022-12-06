import React from "react";

const MyProfileIcon = ({ stroke }) => {
	return (
		<svg
			className="transition-[150ms]"
			width="16"
			height="21"
			viewBox="0 0 16 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="transition-[150ms]"
				d="M12 5.5C12 6.56087 11.5786 7.57828 10.8284 8.32843C10.0783 9.07857 9.06087 9.5 8 9.5C6.93913 9.5 5.92172 9.07857 5.17157 8.32843C4.42143 7.57828 4 6.56087 4 5.5C4 4.43913 4.42143 3.42172 5.17157 2.67157C5.92172 1.92143 6.93913 1.5 8 1.5C9.06087 1.5 10.0783 1.92143 10.8284 2.67157C11.5786 3.42172 12 4.43913 12 5.5V5.5ZM8 12.5C6.14348 12.5 4.36301 13.2375 3.05025 14.5503C1.7375 15.863 1 17.6435 1 19.5H15C15 17.6435 14.2625 15.863 12.9497 14.5503C11.637 13.2375 9.85652 12.5 8 12.5V12.5Z"
				stroke={stroke}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default MyProfileIcon;
