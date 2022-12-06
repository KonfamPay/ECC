import React from "react";

const index: React.FC = () => {
	return (
		<div className="mt-48 bg-[#010C18] pb-[80px] md:pb-0 pt-10 md:h-[687px] w-full">
			<p
				data-aos="fade-up"
				className="text-[26px] px-[15px] sm:text-[40px] text-white text-center font-bold mt-[20px] sm:mt-[88px]"
			>
				Our Numbers speak good deed about us
			</p>
			<div className="sm:space-x-10 md:space-x-10 lg:space-x-[120px] xl:space-x-[120px] flex sm:flex-row flex-col gap-8 sm:gap-5 mx-auto items-center justify-center mt-[36px] sm:mt-[122px]">
				<div
					data-aos="zoom-out"
					className="w-auto"
				>
					<p className="text-white text-center font-extrabold text-[35px] sm:text-[50px] md:text-[58px] xl:text-[72px]">75K+</p>
					<p className="text-white text-center font-extralight text-[15px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
						Complaints filled <br />
						by customers
					</p>
				</div>
				<div
					data-aos="zoom-out"
					className="w-auto"
				>
					<p className="text-white text-center font-extrabold text-[35px] sm:text-[50px] md:text-[58px] xl:text-[72px]">56K+</p>
					<p className="text-white text-center font-extralight text-[15px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
						Complains resolved <br /> by companies
					</p>
				</div>
				<div
					data-aos="zoom-out"
					className="w-auto"
				>
					<p className="text-white text-center font-extrabold text-[35px] sm:text-[50px] md:text-[58px] xl:text-[72px]">200K+</p>
					<p className="text-white text-center font-extralight text-[15px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
						Ever Ready Law <br /> Practitioners
					</p>
				</div>
			</div>
		</div>
	);
};

export default index;
