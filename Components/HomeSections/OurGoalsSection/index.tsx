import type { NextPage } from "next";
import { GoalCard } from "../../../Components/";

export const OurGoalsSection: NextPage = () => {
	const goalCardInfo = [
		{
			title: "Protect our customers",
			description: "Safety & security tips, scam watch, guidelines to protect users from fraud and put an end to inustice.",
			iconPath: "/images/shield.svg",
		},
		{
			title: "Help our customers",
			description: "Reach decision maker, send email, get attention from brand via social campaigns.",
			iconPath: "/images/question.svg",
		},
		{
			title: "Fight for our customers",
			description: "Take legal action and approach Consumer forum with experienced lawyers.",
			iconPath: "/images/sword.svg",
		},
	];
	return (
		<div>
			<h1
				data-aos="fade-up"
				className=" text-[22px] px-[30px] md:text-[32px] font-semibold lg:font-medium poppinsFont max-w-[800px] text-center mx-auto mt-[72px] mb-[90px]"
			>
				We are solely bent on redefining customer-buyer relationships in Nigeria.
			</h1>
			<div className="mt-[50px] flex flex-col lg:flex-row justify-center items-center px-[30px] lg:px-0 gap-[20px] mb-[114px]">
				{goalCardInfo.map((card, index) => (
					<GoalCard
						title={card.title}
						description={card.description}
						iconPath={card.iconPath}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};
