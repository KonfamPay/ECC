import { useRouter } from "next/router";
import Analytics from "./icons/Analytics";
import Dashboard from "./icons/Dashboard";
import Complaints from "./icons/Complaints";
import Latest from "./icons/Latest";
import Messages from "./icons/Messages";
import Manage from "./icons/Manage";

const getIcon = (iconName, stroke) => {
	switch (iconName) {
		case "Dashboard":
			return <Dashboard stroke={stroke} />;
		case "Manage Users":
			return <Manage stroke={stroke} />;
		case "Complaints":
			return <Complaints stroke={stroke} />;
		case "Latest Scams":
			return <Latest stroke={stroke} />;
		case "Analytics":
			return <Analytics stroke={stroke} />;
		case "Messages":
			return <Messages stroke={stroke} />;
	}
};

const NavButton = ({ isActive, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={isActive ? { color: "#0B63C5" } : { color: "#fffff" }}
			className={`transition-[100ms] inline-flex min-w-[198px] ${isActive ? "text-eccblue bg-white py-[15px] " : "text-white"} hover:border hover:border-white hover:border-solid hover:py-[15px]  font-medium poppinsFont text-[16px] rounded-lg   px-[16px] items-center gap-x-[20px]`}
		>
			{getIcon(text, isActive ? "#0B63C5" : "#ffff")}
			{text}
		</button>
	);
};
const SideNav = () => {
	const router = useRouter();
	return (
		<div className="fixed h-screen w-[295px] pl-[32px] pt-[35px] bg-eccblue lg:block hidden">
			<div className="flex flex-col w-full items-center">
				<div className="w-full flex items-center mt-[40px] flex-col">
					<div className="flex flex-row text-white items-center">
						<img
							className="w-[82px] h-[23px]"
							src="../../Images/whiteEccLogo.svg"
							alt=""
						/>
						<p className="text-[12px] align-text-bottom">ADMIN</p>
					</div>

					<div className="space-y-[30px] mt-[60px] w-full flex flex-col items-center">
						<NavButton
							text="Dashboard"
							isActive={router.pathname === "/admin" ? true : false}
							onClick={() => {
								router.push("/admin");
							}}
						/>
						<NavButton
							text="Manage Users"
							isActive={router.pathname === "/admin/manage" ? true : false}
							onClick={() => {
								router.push("/admin/manage");
							}}
						/>
						<NavButton
							text="Complaints"
							isActive={router.pathname === "/admin/complaints" ? true : false}
							onClick={() => {
								router.push("/admin/complaints");
							}}
						/>
						<NavButton
							text="Latest Scams"
							isActive={router.pathname === "/admin/latest" ? true : false}
							onClick={() => {
								router.push("/admin/latest");
							}}
						/>
						<NavButton
							text="Analytics"
							isActive={router.pathname === "/admin/analytics" ? true : false}
							onClick={() => {
								router.push("/admin/analytics");
							}}
						/>
						<NavButton
							text="Messages"
							isActive={router.pathname === "/admin/messages" ? true : false}
							onClick={() => {
								router.push("/admin/messages");
							}}
						/>
						<button className="flex flex-row text-white w-[80%] items-center justify-center ">
							<img
								src="/icons/admin-icons/logoutWhite.svg"
								className="mr-4"
							/>
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
