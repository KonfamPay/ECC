import type { NextPage } from "next";
import { IconContainer } from "../../../../Components";

export const TestimonialCard: NextPage = () => {
	return (
		<div className="top-5 md:top-9 lg:top-32 xl:top-40 left-10 md:left-36 flex flex-row space-x-10 pt-[15px] md:pt-[20px] lg:pt-[55px]">
			<div className="">
				<div className="relative">
					<img
						src="/Images/man.png"
						alt=""
						className="rounded-[15px] w-[200px] md:w-[250px] lg:w-[300px] xl:w-[467px] h-[300px] md:h-[350px] lg:h-[450px] xl:h-[650px]"
					/>
					<div className="absolute bottom-5 md:bottom-5 lg:bottom-10 xl:bottom-20 px-[14px] md:px-7">
						<p className="text-[10px] md:text-[13px] lg:text-[15px] xl:text-2xl [1px] font-bold text-white left-8 right-4 pb-[2px] md:pb-1 lg:pb-3">Danny Brown</p>
						<p className="text-[8px] md:text-[10px] lg:text-[15px] xl:text-1xl font-extralight left-8 right-4 pb-2 md:pb-3 lg:pb-7 text-[#AFAFAF]">Danny Brown</p>
						<p className="text-[11px] md:text-[10px] lg:text-[15px] xl:text-2xl [1px] font-light text-white left-8 right-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly the visual form of a document or a typeface without relying on meaningful.</p>
					</div>
					<div className="absolute -top-10 left-[30%] md:left-[35%] lg:left-[37%] xl:left-[42%] scale-[0.7] sm:scale-[0.85] lg:scale-[1]">
						<IconContainer
							iconPath={"/images/shield.svg"}
							size={80}
						></IconContainer>
					</div>
				</div>
			</div>
		</div>
	);
};
