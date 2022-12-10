import type { NextPage } from "next";
import Image from "next/image";
import profileHeader from "@/icons/dashboard-icons/profile-header.svg";
import dummyProfile from "@/images/dummy-profile.png";
import camera from "@/icons/dashboard-icons/camera.svg";
import cOutline from "@/icons/dashboard-icons/camera-outline.svg";
import Link from "next/link";
import Details from "../PersonalDetails";
import { useState, useEffect, useContext } from "react";
import { format, parse } from "fecha";
import { motion } from "framer-motion";
import ComplaintsCardSection from "./../../../../Sections/ComplaintsCardSection/index";
import { useCookies } from "react-cookie";
import { UserContext } from "../../../Contexts/UserContext";
const Profile: NextPage = () => {
	const [cookie, setCookie] = useCookies(["user"]);
	const { user, setUser } = useContext(UserContext);
	useEffect(() => {
		if (cookie.user) setUser(cookie.user);
	});
	const [isShowing, setIsShowing] = useState("personal");
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
		>
			<div className=" lg:block hidden bg-white rounded-[20px] overflow-hidden w-full">
				<div className="relative rounded-t-[20px] h-[150px] xl:h-[175px]">
					<Image
						src={profileHeader}
						alt="Profile Header"
						layout="fill"
						objectFit="cover"
					/>
					<div className="relative flex flex-col items-center pt-[55px] xl:pt-[100px]">
						<div className="relative w-[157px] h-[150px]">
							<Image
								src={dummyProfile}
								alt="Dummy Profile"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative w-[43px] h-[43px] bottom-[48px] left-[56px] cursor-pointer">
							<Image
								src={camera}
								alt="Camera"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
				<div className="text-center mt-[70px] xl:mt-[98px]">
					<p className="text-[24px] font-medium opacity-80">{`${user?.firstName} ${user?.lastName}`}</p>
					<p className="mt-[10px] text-[18px] font-medium opacity-70">{`${user?.email}`}</p>
				</div>
				<div className="mt-[31px] flex flex-col space-y-[60px] xl:space-y-[86px]">
					<div className="flex justify-around flex-row space-x-[80px] xl:space-x-[120px]">
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[165px]">
									<p className="text-eccblue text-[16px] -tracking-[0.02em] font-medium">Phone Number</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px] -tracking-[0.02em] font-medium opacity-70">{`${user?.phoneNumber}`}</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[122px]">
									<p className="text-eccblue font-medium text-[16px] -tracking-[0.02em]">Date of Birth</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px] font-medium -tracking-[0.02em] opacity-70">{user?.createdAt && <p className="text-[18px] font-medium -tracking-[0.02em]">{`${format(parse(user?.createdAt, "isoDateTime")!, "isoDate")}`}</p>}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-around space-x-[60px]">
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[200px] xl:w-[240px]">
									<p className="text-eccblue text-[16px] -tracking-[0.02em]">Address</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px] w-[179px] xl:w-[219px] -tracking-[0.02em] opacity-70 break-words">{`${user?.address}`}</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[103px]">
									<p className="text-eccblue text-[16px] -tracking-[0.02em]">State</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px] -tracking-[0.02em] opacity-70">{`${user?.state}`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-center items-center bg-eccblue mx-[37px] xl:mx-[73px] rounded-xl mt-[60px] mb-[41px]">
					<div className="relative mr-5 h-[24px] w-[24px]">
						<Image
							src={cOutline}
							alt="Camera"
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<p className="text-center text-[19px] text-white font-[600] py-[16.5px] -tracking-[0.02em]">Change Photo</p>
				</div>
			</div>

			<div className="lg:hidden w-full bg-clearblue relative">
				<div className="relative rounded-t-[20px] h-[105.44px]">
					<Image
						src={profileHeader}
						alt="Profile Header"
						layout="fill"
						objectFit="cover"
					/>
					<div className="relative flex flex-col items-center pt-[49.7px]">
						<div className="relative w-[100px] h-[100px]">
							<Image
								src={dummyProfile}
								alt="Dummy Profile"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<div className="relative w-[27.39px] h-[28.67px] bottom-[20px] left-[20px] cursor-pointer">
							<Image
								src={camera}
								alt="Camera"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
				<div className="text-center mt-[63.87px] ">
					<p className="text-[18px] font-[600]">{`${user?.firstName} ${user?.lastName}`}</p>
					<p className="mt-[10px] text-[16px] text-gray-500 font-[600]">{`${user?.email}`}</p>
				</div>
				<div className="mx-3 mt-[27px]">
					<div className="flex flex-row items-center justify-between text-sm border-b border-[#CCD2E3]">
						<div
							onClick={() => {
								setIsShowing("personal");
							}}
							style={{ borderBottomColor: isShowing === "personal" ? "rgb(11,99,197)" : "transparent" }}
							className="border-b-[5px] mb-0 text-[#000000BF] "
						>
							Personal Information
						</div>
						<div
							style={{ borderBottomColor: isShowing === "complaints" ? "rgb(11,99,197)" : "transparent" }}
							className="border-b-[5px] mb-0 text-[#000000BF]"
							onClick={() => {
								setIsShowing("complaints");
							}}
						>
							Complaint Statistics
						</div>
					</div>
					{isShowing === "personal" ? (
						<div className="bg-clearblue pb-[70px]">
							<ul>
								<Details
									label="
							Phone Number"
									text={`${user?.phoneNumber}`}
								/>
								<Details
									label="
							Date of Birth"
									text={user?.createdAt && `${format(parse(user?.createdAt, "isoDateTime")!, "isoDate")}`}
								/>
								<Details
									label="Address"
									text={`${user?.address}`}
								/>
								<Details
									label="State"
									text={`${user?.state}`}
								/>
							</ul>
						</div>
					) : (
						<div className="my-7">
							<ComplaintsCardSection />
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Profile;
