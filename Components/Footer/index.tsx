import { FooterList } from "../";
import Image from "next/image";

export const  Footer: React.FC = (props) => {
	return (
		<footer
			data-aos="fade-up"
			className="flex flex-col gap-[36px] lg:gap-[70px] mt-[72px] mx-auto max-w-screen w-screen lg:w-[95%]"
		>
			<div className="flex flex-row justify-between ">
				<div className="flex-col w-[40%]  gap-[50px] hidden lg:flex">
					<img
						src="./images/eccLogo-2.svg"
						className="w-[65px]"
						alt="ECC's Logo"
					/>
					<p className=" text-[16px] text-grey-200 leading-[37px] w-[528px]">ecc is complaints a distributor of pine tm from vizag andhra pradesh as of oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost </p>
				</div>
				<div className=" w-[40%] flex flex-col gap-[50px] lg:mx-0 mx-auto lg:gap-[30px]">
					<div className="flex flex-row w-[100%]   justify-around">
						<FooterList
							title="NAVIGATE THROUGH"
							items={["Home", "Complaints", "Latest Scams", "Statistics", "Complaint letter"]}
						/>

						<FooterList
							title="SUPPORT"
							items={["Contact Us", "FAQs"]}
						/>
						<FooterList
							title="COMPANY"
							items={["Terms of Service", "Privacy Policy"]}
						/>
					</div>
					<FooterList
						title=""
						items={["Post a Complaint", "Login/Signup"]}
						areButtons={true}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-[15px] lg:gap-[23px] items-center justify-center w-[100%]">
				<p className="text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] ">
					Avoid getting scammed, Use <span className="text-eccgreen">Konfampay</span>
				</p>
				<button className="text-[10px] lg:text-[14px] px-[30px] py-[10px] lg:px-[30px] lg:py-[14px] text-center text-white mb-[24px] rounded-[8px] bg-eccgreen font-medium box-border w-[170px] block">Learn more</button>
			</div>
			<div className="flex-col gap-[30px] lg:hidden flex">
				<img
					src="./images/eccLogo-2.svg"
					className="w-[35px]"
					alt="ECC's Logo"
				/>
				<p className=" text-[12px] text-grey-200 leading-[19.4px] w-[100%]">ecc is complaints a distributor of pine tm from vizag andhra pradesh as of oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost </p>
			</div>
			<div className="w-[100%] mb-[54px]">
				<p className="text-center text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px]">&copy; Copyright 2022. E-commerce complaints, Nigeria.</p>
			</div>
		</footer>
	);
};
