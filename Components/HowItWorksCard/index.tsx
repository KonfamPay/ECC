import React from "react";
import { IconContainer } from "../";

interface HowItWorksCardProps {
	title: string;
	description: string;
	icon: string;
	bgIcon: string;
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ title, description, icon, bgIcon }) => {
	return (
		<>
			<div className={`w-full max-w-[270px] md:w-[320px] md:max-w-[395px] xl:w-[395px] h-full md:h-[380px] lg:h-[380px] xl:h-[416px] flex flex-col items-center justify-center text-center px-[27px] rounded-xl pt-[77px] pb-[96px] relative howItWorksCard`}>
				<div className="w-[77px] md:w-[100px] lg:w-[114px] h-[77px] md:h-[114px] lg:h-[114px] rounded-full flex items-center justify-center absolute -top-[14%] z-10">
					<img
						src={`../icons/how-it-works-icons/${icon}.svg`}
						className=""
						alt=""
					/>
				</div>
				<div className="w-[81px] md:w-[110px] lg:w-[120px] h-[80px] md:h-[113px] lg:h-[120px] absolute -top-[14.5%] bg-white rounded-full z-[1]" />
				<div className="hidden lg:block w-[68px] h-[68px] pointerShadow bg-white rounded-full absolute right-[-33px] z-[10]">
					<div className="flex items-center justify-center w-full h-full">
						<img
							src="../icons/how-it-works-icons/pointer.svg"
							alt=""
						/>
					</div>
				</div>
				<div className="text-white howItWorksCardText">
					<p className="text-[16px] md:text-[24px] font-[600]">{title}</p>
					<p className="text-[13px] md:text-[20px] mt-[40px] leading-[30px]">{description}</p>
				</div>
			</div>
		</>
	);
};
