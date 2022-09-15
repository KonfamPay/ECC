import Link from "next/link";
import Notifications from "./Notifications";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";

const TopNav = () => {
	const [cookie, setCookie] = useCookies(["user"]);
	const router = useRouter();
	const [user, setUser] = useState({});
	const currentDate = moment().format("ddd. Do MMMM, YYYY");
	//useEffect(() => {
	// 	if (!cookie.user) router.replace("/login");
	// 	else {
	// 		setUser(cookie.user);
	// 		console.log(user);
	// 	}
	// }, []);

	const getCurrentPage = () => {
		const currentPath = router.pathname;
		switch (currentPath) {
			case "/dashboard":
				return "Dashboard";
			case "/dashboard/profile":
				return "My Profile";
			case "/dashboard/mycomplaints":
				return "My Complaints";
			case "/dashboard/talktoalawyer":
				return "Talk To A Lawyer";
			case "/dashboard/hirealawyer":
				return "Hire A Lawyer";
			case "/dashboard/help":
				return "Help";
		}
	};
	console.log(new Date(user.createdAt).getFullYear());
	return (
		<div
			style={{ zIndex: 20 }}
			className="fixed left-[274px] top-0 w-[calc(100%-274px)] h-[110px] bg-white pl-[35px] pt-[0px] pr-[66px] flex justify-between items-center poppinsFont"
		>
			<div>
				<p className="font-medium text-[24px] text-eccblue">{getCurrentPage()}</p>
				<p className="font-medium text-[18px] text-[#7A797D] mt-[2px]">{currentDate}</p>
			</div>
			<div className="flex items-center gap-x-[60px]">
				<Notifications newNotifications={false} />
				<div className="flex gap-x-[21px]">
					<div className="w-[50px] h-[50px] rounded-full overflow-hidden">
						<img
							className="w-full"
							src={user.profilePic || "/Images/profilePic.png"}
						/>
					</div>
					<div className="flex flex-col items-start ">
						<p className="font-semibold opacity-70 text-[20px]">{`${user.firstName} ${user.lastName}`}</p>
						<p className="font-semibold text-[14px] relative ">
							<span className="opacity-70">Member since</span> <span className="text-eccblue">{new Date(user.createdAt).getFullYear()}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TopNav;
