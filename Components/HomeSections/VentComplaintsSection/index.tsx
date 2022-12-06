import React from "react";
import { VentComplaintsCardsContainer } from "../../../Components";

const VentComplaintsSection: React.FC = (props) => {
	return (
		<>
			<section className="bg-gradient-to-br from-eccblue via-eccblue to-[#0953A4] pb-[90px] pt-[60px] lg:pt-[120px]  gap-[100px]">
				<div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-center">
					<div
						data-aos="fade-up"
						className="text-center xl:text-left"
					>
						<h1 className="text-[32px] md:text-[40px] xl:text-[64px] poppinsFont text-white font-medium max-w-[350px] xl:max-w-[586px] text-center xl:text-left mx-auto xl:mx-0 px-[15px]">Vent out your Complaints, leave the rest to us...</h1>
						<p className="text-[16px] sm:text-[19px] xl:text-[24px] text-white max-w-[500px] mt-[15px] px-[15px] md:mt-[30px] text-center xl:text-left mx-auto xl:mx-0">Get resolution with minimum efforts and reclaim your family time.</p>
						<button className="py-[18px] sm:py-[26px] px-[30px] sm:px-[60px] text-[18px] font-medium bg-white rounded-xl mt-[32px] mb-[32px] mx-auto xl:mx-0">Post a Complaint</button>
					</div>
					<VentComplaintsCardsContainer />
				</div>
			</section>
		</>
	);
};

export default VentComplaintsSection;
