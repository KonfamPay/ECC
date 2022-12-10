import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import leftArrow from "@/icons/dashboard-icons/arrow-narrow-left.svg";

const LandingPageCard: NextPage = () => {
	const router = useRouter();
	const cardcontents = [
		{
			iconpath: "/../../../icons/dashboard-icons/my-complaints.svg",
			title: "My Complaints",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#0B63C5",
			alt: "complaints",
			href: "/dashboard/mycomplaints",
		},
		{
			iconpath: "/../../../icons/dashboard-icons/help.svg",
			title: "Help",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#FFB330",
			alt: "complaints",
			href: "/",
		},
		{
			iconpath: "/../../../icons/dashboard-icons/profile.svg",
			title: "My Portfolio",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#FF88B3",
			alt: "complaints",
			href: "/dashboard/profile",
		},
		{
			iconpath: "/../../../icons/dashboard-icons/fac.svg",
			title: "File a Complaint",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#020D1B",
			alt: "/file-complaint",
		},
	];
	return (
		<>
			<div className="block">
				<div className="grid grid-cols-2 gap-x-[19px] sm:gap-x-[40px] lg:gap-x-[40px] xl:gap-x-[68px] gap-y-[26px] sm:gap-y-[30px] lg:gap-y-[30px] xl:gap-y-[37px] justify-items-center">
					{cardcontents.map((card, index) => (
						<div
							key={index}
							className="relative flex flex-col lg:cursor-pointer px-[10px] lg:pr-[20px] sm:pl-[20px] xl:pl-[32px] pt-[17px] pb-[11px] sm:py-[40px] xl:py-[55.5px] w-full text-white rounded-[10px] justify-center"
							onClick={() => {
								router.push(`${card.href}`);
							}}
							style={{ backgroundColor: card.bgcolor }}
						>
							<div className="flex flex-col sm:flex-row sm:items-center">
								<div className="relative w-[32px] sm:w-[60px] xl:w-[80px] h-[32px] sm:h-[60px] xl:h-[80px]">
									<Image
										src={card.iconpath}
										alt={card.alt}
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<div className="sm:pl-5 xl:pl-8 w-full lg:w-3/4 flex-1 mt-3 sm:mt-0 break-words mb-2">
									<p className="text-[14px] sm:text-[20px] lg:text-[24px	] font-[600]">{card.title}</p>
									<p className="w-full mt-2 sm:mt-0 text-[12px] sm:text-[15px] lg:text-[18px] leading-[18px] sm:leading-[27px]">{card.description}</p>
								</div>
							</div>

							<div className="flex lg:hidden justify-end relative sm:absolute sm:bottom-[10px] lg:bottom-4 sm:right-4 lg:right-4">
								<div
									className="relative w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]"
									onClick={() => {
										router.push(`${card.href}`);
									}}
								>
									<Image
										src={leftArrow}
										alt="a left arrow icon"
										layout="fill"
										objectFit="contain"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default LandingPageCard;
