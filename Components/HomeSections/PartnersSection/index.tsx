import type { NextPage } from "next";
import { PartnerBox } from "../../../Components";

export const PartnersSection: NextPage = () => {
	return (
		<div className="lg:pt-[200px] xl:pt-[100px] pb-[100px] md:pb-[174px] overflow-hidden">
			<h1
				data-aos="zoom-in-up"
				className=" px-[15px] max-w-[500px] lg:max-w-[700px] text-[22px] md:text-[32px] lg:text-[40px] font-semibold poppinsFont mt-[100px] mb-[56px] text-center mx-auto"
			>
				Active Partners helping to create safety and awareness
			</h1>
			<div
				data-aos="zoom-in-down"
				className="hidden md:flex flex-col gap-[16px] lg:gap-[32px] lg:scale-95"
			>
				<div className="flex flex-row justify-center items-center w-full md:gap-[17px] lg:gap-7">
					{[0, 1, 2, 3].map((item, index) => (
						<PartnerBox key={index} />
					))}
				</div>
				<div className="flex flex-row justify-center items-center w-full md:gap-[17px] gap-7">
					{[0, 1, 2, 3, 4].map((item, index) => (
						<PartnerBox key={index} />
					))}
				</div>
				<div className="flex flex-row justify-center items-center w-full md:gap-[17px] gap-7">
					{[0, 1, 2, 3].map((item, index) => (
						<PartnerBox key={index} />
					))}
				</div>
			</div>
			<div
				data-aos="zoom-in-down"
				className="flex md:hidden w-[3866px] gap-[30px] pr-[30px] relative partnersCarousel"
			>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
					<PartnerBox key={index} />
				))}
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
					<PartnerBox key={index} />
				))}
			</div>
		</div>
	);
};
