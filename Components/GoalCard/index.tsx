import React from "react";
import { IconContainer } from "../";

interface GoalCardProps {
	title: string;
	description: string;
	iconPath: string;
}

export const GoalCard: React.FC<GoalCardProps> = ({ title, description, iconPath }) => {
	return (
		<div
			data-aos="zoom-in"
			className="relative lg:h-[280px] lg:w-[30%] max-w-[373px] rounded-[16px] bg-[#ECF4FE] pt-[79px] pb-[38px] px-[20px] mt-[50px]"
		>
			<div className="absolute -top-[35px]">
				<IconContainer iconPath={iconPath} />
			</div>
			<h3 className="poppinsFont font-semibold text-[24px] lg:text-[23px]">{title}</h3>
			<p className="poppinsFont sha mt-[20px] text-[16px] text-grey-200">{description}</p>
		</div>
	);
};
