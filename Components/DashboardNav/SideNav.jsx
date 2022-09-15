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
			className="transition-[100ms] inline-flex min-w-[198px] py-[15px] bg-white font-medium poppinsFont text-[16px] rounded-xl  px-[16px] items-center gap-x-[16px]"
		>
			{getIcon(text, isActive ? "#0B63C5" : "#7A797D")}
			{text}
		</button>
	);
};

const SideNav = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const [currentPage, setCurrentPage] = useState("dashboard");
	const router = useRouter();
	const onLogout = () => {
		removeCookie(["user"]);
		router.replace("/login");
	};
	return (
		<div
			style={{ zIndex: 20 }}
			className="fixed h-screen w-[295px] pl-[32px] pt-[35px] bg-white"
		>
			<div className="mb-[40px]">
				<Image
					src="/Images/eccLogo.svg"
					width={82.98}
					height={28}
				/>
			</div>
			<div>
				<button className="min-w-[200px] py-[14px] bg-eccblue font-semibold poppinsFont text-[16px] text-white rounded-xl focus:outline-none mb-[20px]">File a Complaint</button>
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
			</div>
		</div>
	);
};
export default SideNav;
