import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const LandingPageCard: NextPage = () => {
	const router = useRouter();
	const cardcontents = [
		{
			iconpath: "../../../icons/dashboard-icons/my-complaints.svg",
			title: "My Complaints",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#0B63C5",
			alt: "complaints",
			href: "/dashboard/mycomplaints",
		},
		{
			iconpath: "../../../icons/dashboard-icons/help.svg",
			title: "Help",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#FFB330",
			alt: "complaints",
			href: "/",
		},
		{
			iconpath: "../../../icons/dashboard-icons/profile.svg",
			title: "My Portfolio",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#FF88B3",
			alt: "complaints",
			href: "/dashboard/profile",
		},
		{
			iconpath: "../../../icons/dashboard-icons/fac.svg",
			title: "File a Complaint",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#020D1B",
			alt: "/file-complaint",
		},
	];
	return (
		<>
			<div className="lg:block hidden">
				<div className="grid max-w-[2000px] mx-auto grid-cols-2 gap-x-[30px] xl:gap-x-[68px] gap-y-[20px] xl:gap-y-[37px] justify-items-center  ">
					{cardcontents.map((card) => (
						<div
							className="flex   flex-row pl-[22px] xl:pl-[32px] py-[32.5px] xl:py-[55.5px] pr-4 text-white w-[510px] rounded-[20px]"
							style={{ backgroundColor: card.bgcolor }}
						>
							<img
								src={card.iconpath}
								className=" w-[80px] h-[81px] "
								alt={card.alt}
							/>

							<div className="pl-[32px] w-3/4 flex-1 break-words">
								<p className="text-[24px] font-[600]">{card.title}</p>
								<p className="w-full text-lg leading-[27px]">{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="lg:hidden">
				<div className=" sm:grid sm:grid-cols-2 sm:gap-x-[50px] sm:justify-items-center gap-y-[20px] flex flex-col items-center ">
					{cardcontents.map((card) => (
						<div
							className="flex flex-col sm:pl-[10px] sm:pt-4  w-[250px] pl-[15px] py-[10px] text-white rounded-[20px]"
							style={{ backgroundColor: card.bgcolor }}
						>
							<img
								src={card.iconpath}
								className="w-[48px] h-[48px]"
								alt={card.alt}
							/>

							<div className="pl-[10px] w-full mt-4">
								<p className="text-[14px] font-[600]">{card.title}</p>
								<p className="w-full mt-1 text-[13px]">{card.description}</p>
							</div>

							<div className="w-full flex flex-col items-end">
								<button
									className="mr-4"
									onClick={() => {
										router.push(`${card.href}`);
									}}
								>
									<img
										className="w-[20px] h-[20px] text-right "
										src="../../../icons/dashboard-icons/arrow-narrow-left.svg"
										alt=""
									/>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default LandingPageCard;
