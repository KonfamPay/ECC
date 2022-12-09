import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Footer, NavBar } from "../Components";

const NotFoundPage: NextPage = () => {
	const router = useRouter();
	const handleClick = () => {
		router.push("/");
	};
	return (
		<>
			<NavBar />
			<div className="my-[112px] flex flex-col lg:flex-row w-[92%] lg:w-[90%] max-w-[1440px] mx-auto lg:justify-between gap-[70px] lg:gap-[0] items-center">
				<img
					src="Images/NotFound.png"
					alt="Not-found"
				/>
				<div className="flex flex-col w-[100%] lg:w-[524px]">
					<h1 className="text-[24px] leading-[36px] lg:text-[64px] lg:leading-[96px] text-center lg:text-left font-bold">Oh No!</h1>
					<h1 className="text-[24px] leading-[36px] lg:text-[64px] lg:leading-[96px] text-center lg:text-left font-bold">Page Not Found</h1>
					<p className="text-[16px] lg:text-[26px] leading-[24px] text-center lg:text-left lg:leading-[39px] font-[500] text-[#676767] py-[20px] lg:py-[50px]">The page you requested could not be found. we are working on it :)</p>
					<div className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[35px]">
						<button
							className="text-[10px] lg:text-[14px] px-[30px] py-[14px] text-center text-white rounded-[8px] bg-darkblue font-medium box-border block"
							onClick={() => handleClick()}
						>
							Back to homepage
						</button>
						<button className="text-[10px] lg:text-[14px] text-eccblue font-medium py-[10px] px-[20px] lg:px-[0] bg-transparent lg:py-[14px] text-center">Visit our help center</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NotFoundPage;
