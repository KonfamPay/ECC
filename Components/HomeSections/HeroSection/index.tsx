import type { NextPage } from "next";

export const HeroSection: NextPage = () => {
	return (
		<div className="pt-48 mx-auto items-center justify-center text-center bg-clearblue">
			<p className="mx-auto text-[30px] sm:text-4xl font-bold">
				Make & <span className="text-eccblue">resolve</span>
				<br />
				complaints easily
			</p>
			<p className="mt-4 font-medium sm:text-[14px] px-[15px] sm:px-[0]">
				Hair vendor don block you <br />
				after you make payment for Instagram?
			</p>
			<img
				src="./images/man-freaked-out.png"
				alt=""
				className="mx-auto"
			/>
		</div>
	);
};
