import type { NextPage } from "next";
import Link from "next/link";
import Details from "../PersonalDetails";
import { useState, useEffect, useContext } from "react";
import { format, parse } from "fecha";
import { motion } from "framer-motion";
import ComplaintsCardSection from "./../../../../Sections/ComplaintsCardSection/index";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../Contexts/UserContext";
const profile: NextPage = (props) => {
	const [cookie, setCookie] = useCookies(["user"]);
	const { user, setUser } = useContext(UserContext);
	useEffect(() => {
		if (cookie.user) setUser(cookie.user);
	});

	const [isShowing, setIsShowing] = useState("personal");
	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.3}}}>
			<div className=" lg:block hidden w-full bg-white rounded-[20px] pb-[30px]">
				<img
					src="/icons/dashboard-icons/profile-header.svg"
					className="rounded-t-[20px] w-full"
					alt=""
				/>
				<div className="mx-auto  w-[20%] h-[5%] xl:bottom-[150px] lg:bottom-[60px] relative">
					<img
						src="/images/dummy-profile.png"
						alt=""
						className="absolute"
					/>
					<img
						src="/icons/dashboard-icons/camera.svg"
						className="relative -bottom-[100px] -right-[132px] cursor-pointer  "
						alt=""
					/>
				</div>
				<div className="text-center">
					<p className="text-[24px] font-[500]">{`${user?.firstName} ${user?.lastName}`}</p>
					<p className="mt-[10px] text-[18px] font-[500]">{`${user?.email}`}</p>
				</div>
				<div className="mx-[auto] mt-[39px] flex flex-col  space-y-[60px]">
					<div className="flex flex-row mx-auto xl:space-x-[120px] lg:space-x-[100px]">
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[165px]">
									<p className="text-eccblue text-[16px]">Phone Number</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px]">{`${user?.phoneNumber}`}</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[122px]">
									<p className="text-eccblue text-[16px]">Date of Birth</p>
								</div>
								<div className="mt-[10px]">{user?.createdAt && <p className="text-[18px]">{`${format(parse(user?.createdAt, "isoDateTime")!, "isoDate")}`}</p>}</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row mx-auto xl:space-x-[81px] lg:space-x-[60px]">
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[240px]">
									<p className="text-eccblue text-[16px]">Address</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px] w-[219px]">{`${user?.address}`}</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[103px]">
									<p className="text-eccblue text-[16px]">State</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px]">{`${user?.state}`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-[73px] bg-eccblue mx-[73px] rounded-xl lg:mt-[60px] xl:mt-[60px] mb-[20px] flex flex-row justify-center">
					<img
						className="mr-4"
						src="/icons/dashboard-icons/camera-01.svg"
						alt=""
					/>
					<p className="text-center text-white font-[600] py-[16.5px]">Change Photo</p>
				</div>
			</div>

			<div className="lg:hidden w-full bg-clearblue">
				<img
					src="/icons/dashboard-icons/profile-header.svg"
					className="w-full"
					alt=""
				/>
				<div className="mx-auto w-[120px] h-[120px] -mt-[70px] relative">
					<img
						src="/images/dummy-profile.png"
						alt=""
					/>
					<img
						src="/icons/dashboard-icons/camera.svg"
						className="absolute bottom-0 right-0 cursor-pointer"
						alt=""
					/>
				</div>
				<div className="text-center mt-[19px] ">
					<p className="text-[18px] font-[600]">Voke Onoriode</p>
					<p className="mt-[10px] text-[16px] text-gray-500 font-[500]">Vokeonoriode@gmail.com</p>
				</div>
				<div className="w-[90%] mt-8 mx-auto flex flex-row items-center justify-between text-sm border-b border-gray-500">
					<div
						onClick={() => {
							setIsShowing("personal");
						}}
						style={{ borderBottomColor: isShowing === "personal" ? "rgb(11,99,197)" : "transparent" }}
						className=" border-b-[4px] mb-0 "
					>
						Personal Information
					</div>
					<div
						style={{ borderBottomColor: isShowing === "complaints" ? "rgb(11,99,197)" : "transparent" }}
						className="border-b-[4px] mb-0"
						onClick={() => {
							setIsShowing("complaints");
						}}
					>
						Complaint Statistics
					</div>
				</div>

				{isShowing === "personal" ? (
					<div className="bg-clearblue">
						<ul>
							<Details
								label="
						Phone Number"
								text="09065748390"
							/>
							<Details
								label="
						Date of Birth"
								text="12-01-2001"
							/>
							<Details
								label="Address"
								text="4. jubril Adejumobi Street Lagos, Nigeria"
							/>
							<Details
								label="State"
								text="Lagos"
							/>
						</ul>
					</div>
				) : (
					<div className="my-6">
						<ComplaintsCardSection />
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default profile;
