import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { NotificationContext } from "../Contexts/NotificationContext";
import { Notification } from "../Types";


const Notifications: React.FC = () => {
	const { newNotifications } = useContext(NotificationContext);


	return (
		<Link href="/dashboard/notifications">
			<div className="relative cursor-pointer">
				<img
					className="w-[24px] h-[24px]"
					src="/Images/notificationsIcon.svg"
				/>
				<div
					style={{ opacity: newNotifications ? 1 : 0 }}
					className="transition-[150ms] w-[12px] h-[12px] bg-[#FF0000] rounded-full absolute top-0 right-0"
				></div>
			</div>
		</Link>
	);
};
export default Notifications;
