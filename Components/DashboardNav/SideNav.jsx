import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import DashboardIcon from "./icons/dashboardIcon";
import ComplaintsIcon from "./icons/complaintsicon";
import MyProfileIcon from "./icons/myprofileicon";
import TalkToLawyerIcon from "./icons/talktolawayericon";
import HireLawyerIcon from "./icons/hirelawyericon";
import HelpIcon from "./icons/helpicon";

const getIcon = (iconName, stroke) => {
	switch (iconName) {
		case "Dashboard":
			return <DashboardIcon stroke={stroke} />;
		case "My Profile":
			return <MyProfileIcon stroke={stroke} />;
		case "My Complaints":
			return <ComplaintsIcon stroke={stroke} />;
		case "Talk to a Lawyer":
			return <TalkToLawyerIcon stroke={stroke} />;
		case "Hire a Lawyer":
			return <HireLawyerIcon stroke={stroke} />;
		case "Help":
			return <HelpIcon stroke={stroke} />;
	}
};

const NavButton = ({ isActive, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={isActive ? { border: "1px solid rgba(11, 99, 197, 1)", color: "#0B63C5" } : { border: "1px solid rgba(11, 99, 197, 0)", color: "#7A797D" }}
			className="transition-[100ms] inline-flex min-w-[198px] py-[15px]  font-medium poppinsFont text-[16px] rounded-xl  px-[16px] items-center gap-x-[16px]"
		>
			{getIcon(text, isActive ? "#0B63C5" : "#7A797D")}
			{text}
		</button>
	);
};

const SideNav = ({ open, openSide }) => {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const [currentPage, setCurrentPage] = useState("dashboard");
	const router = useRouter();
	const onLogout = () => {
		removeCookie(["user"]);
		router.replace("/login");
	};
	return (
		<div>
			<div
				style={{ zIndex: 20 }}
				className="fixed h-screen w-[295px] pl-[32px] pt-[35px] bg-white lg:block hidden"
			>
				<div className="mb-[40px]">
					<Image
						src="/Images/eccLogo.svg"
						width={82.98}
						height={28}
					/>
				</div>
				<div>
					<button
						onClick={() => router.push("/dashboard/file-complaint")}
						disabled={router.pathname == "/dashboard/file-complaint"}
						className="min-w-[200px] py-[14px] bg-eccblue font-semibold poppinsFont text-[16px] text-white rounded-xl focus:outline-none mb-[20px]"
					>
						File a Complaint
					</button>
					<NavButton
						isActive={router.pathname == "/dashboard"}
						text="Dashboard"
						onClick={() => router.push("/dashboard")}
					/>
					<NavButton
						isActive={router.pathname == "/dashboard/profile"}
						text="My Profile"
						onClick={() => router.push("/dashboard/profile")}
					/>
					<NavButton
						isActive={router.pathname == "/dashboard/mycomplaints" || router.pathname == "/complaintDetails"}
						text="My Complaints"
						onClick={() => router.push("/dashboard/mycomplaints")}
					/>
					<NavButton
						isActive={router.pathname == "/dashboard/talktoalawyer"}
						text="Talk to a Lawyer"
						onClick={() => setCurrentPage("talktoalawyer")}
					/>
					<NavButton
						isActive={router.pathname == "/dashboard/hirealawyer"}
						text="Hire a Lawyer"
						onClick={() => setCurrentPage("hirealawyer")}
					/>
					<NavButton
						isActive={router.pathname == "/dashboard/help"}
						text="Help"
						onClick={() => setCurrentPage("help")}
					/>
					<button
						onClick={onLogout}
						className="transition-[100ms] text-[#FA4343] inline-flex min-w-[198px] py-[15px] bg-white font-medium poppinsFont text-[16px] rounded-xl   px-[16px] items-center gap-x-[16px]"
					>
						<img src="/Images/logoutIcon.svg" />
						Logout
					</button>
				</div>
			</div>

			<div>
				{open ? (
					<div
						style={{ zIndex: 30 }}
						className="fixed h-screen w-[295px] pl-[32px] pt-[35px] bg-white "
					>
						<div className="mb-[40px] flex flex-row justify-between">
							<Image
								src="/Images/eccLogo.svg"
								width={82.98}
								height={28}
							/>

							<button
								className="text-eccblue mr-4 text-lg "
								onClick={openSide}
							>
								<img
									src="../icons/dashboard-icons/arrow-left-blue.svg"
									alt=""
								/>
							</button>
						</div>
						<div>
							<button
								onClick={() => router.push("/dashboard/file-complaint")}
								className="min-w-[200px] py-[14px] bg-eccblue font-semibold poppinsFont text-[16px] text-white rounded-xl focus:outline-none mb-[20px]"
							>
								File a Complaint
							</button>
							<NavButton
								isActive={router.pathname == "/dashboard"}
								text="Dashboard"
								onClick={() => router.push("/dashboard")}
							/>
							<NavButton
								isActive={router.pathname == "/dashboard/profile"}
								text="My Profile"
								onClick={() => router.push("/dashboard/profile")}
							/>
							<NavButton
								isActive={router.pathname == "/dashboard/mycomplaints" || router.pathname == "/complaintDetails"}
								text="My Complaints"
								onClick={() => router.push("/dashboard/mycomplaints")}
							/>
							<NavButton
								isActive={router.pathname == "/dashboard/talktoalawyer"}
								text="Talk to a Lawyer"
								onClick={() => setCurrentPage("talktoalawyer")}
							/>
							<NavButton
								isActive={router.pathname == "/dashboard/hirealawyer"}
								text="Hire a Lawyer"
								onClick={() => setCurrentPage("hirealawyer")}
							/>
							<NavButton
								isActive={router.pathname == "/dashboard/help"}
								text="Help"
								onClick={() => setCurrentPage("help")}
							/>
							<button
								onClick={onLogout}
								className="transition-[100ms] text-[#FA4343] inline-flex min-w-[198px] py-[15px] bg-white font-medium poppinsFont text-[16px] rounded-xl  px-[16px] items-center gap-x-[16px]"
							>
								<img src="/Images/logoutIcon.svg" />
								Logout
							</button>
							<div className="w-[80%] h-[210px] mt-8  flex p-4 flex-col rounded-md items-center bg-black text-white">
								<div>
									<img
										src="/Images/konfamPay.svg"
										alt=""
									/>
								</div>

								<div className="flex flex-row mt-4">
									<div className="flex flex-col text-[14px] font-semibold">
										<p>Your payments are secure</p>
										<p className="text-[#67b467] ">No scams again</p>
									</div>
									<div>
										<img
											className="w-[37px] h-[75px]"
											src="/Images/kfpImage.png"
											alt=""
										/>
									</div>
								</div>

								<button className=" mt-4 w-[80%] rounded-md h-auto bg-[#67b467] text-center mx-auto py-2 ">Learn More</button>
							</div>
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};
export default SideNav;
