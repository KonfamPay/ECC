import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

const LandingPageCard: NextPage = () => {
	const cardcontents = [
		{
			iconpath: "../../../icons/dashboard-icons/my-complaints.svg",
			title: "My Complaints",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#0B63C5",
			alt: "complaints",
		},
		{
			iconpath: "../../../icons/dashboard-icons/help.svg",
			title: "Help",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#FFB330",
			alt: "complaints",
		},
		{
			iconpath: "../../../icons/dashboard-icons/profile.svg",
			title: "My Portfolio",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#FF88B3",
			alt: "complaints",
		},
		{
			iconpath: "../../../icons/dashboard-icons/fac.svg",
			title: "File a Complaint",
			description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit ut ",
			bgcolor: "#020D1B",
			alt: "complaints",
		},
	];
	return (
		<>
			<div className="grid grid-cols-2 gap-x-[68px] gap-y-[37px]">
				{cardcontents.map((card) => (
					<div
						className="flex flex-row pl-[32px] py-[55.5px] text-white rounded-[20px]"
						style={{ backgroundColor: card.bgcolor }}
					>
						<img
							src={card.iconpath}
							className="w-[48px] h-[48px]"
							alt={card.alt}
						/>

						<div className="pl-[32px] w-3/4">
							<p className="text-[24px] font-[600]">{card.title}</p>
							<p className="w-full">{card.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default LandingPageCard;
