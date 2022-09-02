import React from "react";
import type { NextPage } from "next";
import FooterComplaints from "../../Components/FooterComplaints";
import NavBar from "../../Components/NavBar";

const index: NextPage = (props) => {
	return (
		<div className="bg-clearblue">
			<NavBar hasWhiteText={true} />
			<div className="relative mx-auto text-center bg-eccblue">
				<p className="mx-auto text-[30px] text-5xl font-bold text-white pt-48 pb-[233px]">
					Be informed, stay woke,
					<br /> stay smart!
				</p>
				{/* <img src="./images/look.png" alt="" className="mx-auto" /> */}
				{/* <div className="rounded-xl mx-[141px] bg-[#fff] xl:w-[80.4%] absolute -bottom-[10%] drop-shadow-md">
					<form className="xl:pl-[28px] xl:pr-[288px] xl:py-[34px] relative flex items-center space-x-[45px]">
						<img
							src="./icons/search.svg"
							className="w-[38px] h-[38px]"
							alt=""
						/>
						<input
							type="text"
							className="w-full text-xl"
							placeholder="Search for phone number, social media handle, Bank details and website"
						/>
						<input
							type="submit"
							value="Search"
							onClick={(e) => e.preventDefault()}
							className="bg-eccblue rounded-xl xl:px-12 xl:py-3.5 text-white placeholder:text-xl absolute right-[93px]"
						/>
					</form>
				</div> */}
			</div>

			<div className="bg-clearblue mt-[115px]">
				<div className="pt-[90px] pl-[140px]">
					<div>
						<p className="text-[24px]">
							Showing{" "}
							<span className="text-[#0B63C5]">
								All Scam types
							</span>{" "}
							stats for{" "}
							<span className="text-[#0B63C5]">2022</span>
						</p>
					</div>
					<div className="flex flex-row w-auto h-auto bg-white mr-[141px] rounded-[12px] mt-[20px] pb-[39px] space-x-[250px]">
						<div>
							<p className="text-[25px] font-semibold pt-[40px] pl-[25px]">
								$350,000,000
							</p>
							<p className="pl-[25px] font-light pt-[12px]">
								Amount Lost
							</p>
						</div>
						<div className="border-l-2">
							<p className="text-[25px] font-semibold pt-[40px] pl-[25px]">
								150,000,000
							</p>
							<p className="pl-[25px] font-light pt-[12px]">
								Number of Reports
							</p>
						</div>
						<div className="border-l-2">
							<p className="text-[25px] font-semibold pt-[40px] pl-[25px]">
								18%
							</p>
							<p className="pl-[25px] font-light pt-[12px]">
								Reports with financial losses
							</p>
						</div>
					</div>
					<div className="w-auto h-[628px] bg-[#fff] mr-[141px] mt-[28px] rounded-[12px]">
						<div>
							<p>Chart goes here</p>
						</div>
					</div>
					<div className="flex flex-row space-x-[28px]">
						<div className="w-[570px] h-[752px] bg-[#fff] rounded-[12px] mt-[28px]">
							<p>Chart goes here</p>
						</div>
						<div className="w-[570px] h-[752px] bg-[#fff] rounded-[12px] mt-[28px]">
							<p>Chart goes here</p>
						</div>
					</div>
				</div>
			</div>
			<FooterComplaints />
		</div>
	);
};

export default index;
