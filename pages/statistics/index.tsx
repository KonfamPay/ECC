import React, { useState } from "react";
import type { NextPage } from "next";
import { Footer, KonfamPayCallout } from "../../Components";
import { NavBar } from "../../Components";
import Head from "next/head";

const index: NextPage = (props) => {
	const [showScam, setShowScam] = useState(false);
	const [year, setYear] = useState(10);
	const getYears = [
		{
			year: 2010,
		},
		{
			year: 2010,
		},
		{
			year: 2010,
		},
		{
			year: 2010,
		},
		{
			year: 2010,
		},
		{
			year: 2010,
		},
		{
			year: 2010,
		},
		{
			year: 2010,
		},
	];
4
	return (
		<>
			<Head>
				<title>Ecommerce Complaint</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<div className="bg-clearblue">
				<NavBar hasWhiteText={true} />
				<div className="relative mx-auto text-center bg-eccblue">
					<div className="pt-9 lg:pt-48 pb-14 lg:pb-[233px]">
						<p className="mx-auto text-2xl lg:text-5xl font-bold text-white">
							Be informed, stay woke,
							<br /> stay smart!
						</p>
					</div>
					{/* <img src="./images/look.png" alt="" className="mx-auto" /> */}
					{/* <div className="rounded-xl mx-[141px] bg-[#fff] xl:w-[80.4%] absolute -bottom-[10%] drop-shadow-md">
					<form className="xl:pl-7 xl:pr-[288px] xl:py-[34px] relative flex items-center space-x-[45px]">
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
					<div className="rounded-xl absolute left-1/2 -translate-x-2/4 -bottom-[285px] lg:-bottom-16 bg-white max-w-[1159px] w-[80.6%] px-7 lg:px-5 py-7">
						<form className="flex flex-col lg:flex-row lg:space-x-[20px] items-center justify-between">
							<div className="w-full">
								<p className="text-left text-eccblue font-medium pb-3">Scam Category</p>
								<div className="bg-grey-100 rounded-xl flex items-center text-grey-200 cursor-pointer">
									<div className="flex justify-between py-4 px-4 w-full">
										<p>Choose a car:</p>
										<img
											src="./icons/chevron-down.svg"
											className={showScam ? "rotate-180 duration-700" : ""}
											alt=""
										/>
									</div>
									<div></div>
								</div>
							</div>
							<div className="w-full mt-4 lg:mt-0">
								<p className="text-left text-eccblue font-medium pb-3">Scam Year / Season</p>
								<div className="relative bg-grey-100 rounded-xl text-grey-200 select-none">
									<div
										className="flex justify-between py-4 px-4 w-full cursor-pointer"
										onClick={() => setShowScam(!showScam)}
									>
										<p>
											{year ? year : new Date().getFullYear().toString() + "(Current Year)"}
											{}{" "}
										</p>
										<img
											src="./icons/chevron-down.svg"
											className={showScam ? "rotate-180 duration-700" : ""}
											alt=""
										/>
									</div>
									{showScam && (
										<div
											className={`absolute top-[44px] right-0 bg-grey-100 -z-10 rounded-b-xl drop-shadow-md`}
											data-aos="slide-down"
											data-aos-offset="100"
										>
											<div className="w-full h-full flex flex-col space-y-[5px] px-[20px] py-[10px]">
												{getYears.map((year, index) => (
													<p
														className="cursor-pointer hover:text-darkblue duration-150"
														onClick={() => {
															setYear(year.year);
															setShowScam(false);
														}}
														key={index}
													>
														{year.year}
													</p>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
							<div className="bg-darkblue rounded-xl flex item-center justify-center py-2 lg:py-[17.5px] px-[33px] lg:px-12 mt-4 lg:mt-9 w-fit min-w-fit text-left text-sm text-white cursor-pointer">
								<p className="font-semibold">View Stats</p>
							</div>
						</form>
					</div>
				</div>

				<div className="bg-clearblue mt-[272px] lg:mt-[115px] lg:w-[80%] max-w-[1159px] mx-3 sm:mx-9 lg:mx-auto">
					<div className="pt-[90px]">
						<div>
							<p className="lg:text-2xl">
								Showing <span className="text-[#0B63C5]">All Scam types</span> stats for <span className="text-[#0B63C5]">2022</span>
							</p>
						</div>
						<div className="w-full bg-white rounded-xl mt-4 lg:mt-5 hidden lg:block">
							{/* <div className="flex flex-col md:flex-row justify-between items-center p-5">
                <div>
                  <h3 className="text-3xl font-bold my-1">$350,000,000</h3>
                  <p className="text-base font-normal text-neutral-500">Amount Lost</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold my-1">150,000,000</h3>
                  <p className="text-base font-normal text-neutral-500">Number of Reports</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold my-1">18%</h3>
                  <p className="text-base font-normal text-neutral-500">Reports with financial losses</p>
                </div>
              </div> */}
							<div className="flex flex-row space-x-48 pl-6 py-5">
								<div className="text-left">
									<div className="">
										<h3 className="text-[25px] font-semibold">$350,000,000</h3>
										<p className="font-light pt-[12px]">Amount Lost</p>
									</div>
								</div>
								<div className="text-left">
									<div className="">
										<h3 className="text-[25px] font-semibold">150,000,000</h3>
										<p className=" font-light pt-[12px]">Number of Reports</p>
									</div>
								</div>
								<div className="text-left xl:border-l-2 xl:pl-24">
									<div className="">
										<h3 className="text-[25px] font-semibold">18%</h3>
										<p className="font-light pt-[12px]">Reports with financial losses</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full h-[628px] bg-white mr-36 mt-7 rounded-xl hidden lg:block">
							<div>
								<p>Chart goes here</p>
							</div>
						</div>
						<div className="w-full">
							<div className="flex flex-col lg:flex-row lg:space-x-7">
								<div className="w-full h-[429px] lg:h-[752px] bg-white rounded-xl mt-7">
									<p>Chart goes here</p>
								</div>
								<div className="w-full h-[323px] lg:h-[752px] bg-white rounded-xl mt-7">
									<p>Chart goes here</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[188px]">
					<KonfamPayCallout />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default index;
