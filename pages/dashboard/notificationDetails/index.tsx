import { getServerSideProps } from "./../../../Components/NotificationItem/notificationData/index";
import  { useRouter }  from "next/router";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import { useContext } from "react";
import { NotificationContext } from "../../../Components/Contexts/NotificationContext";
import { Notification } from "../../../Components/Types";
import { motion } from "framer-motion";

const notificationDetails = () => {
	const router = useRouter();
	const notifiactionId = router.query.id;
	const { notificationData } = useContext(NotificationContext);
	console.log(notificationData);
	const notification = notificationData.filter((notification: Notification) => notification._id == notifiactionId)[0];

	return (
		<NavWrapper>
			<motion.div
				initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1, transition: {duration: 0.3}}}
				className="w-full h-[calc(100vh-211px)]
			 bg-white rounded-[15px] lg:pt-[0px]  lg:overflow-hidden"
			>
				<div className="py-[20px] flex flex-row gap-[40px] pl-4 w-full  bg-eccblue">
					<img
						src="/icons/arrow.svg"
						onClick={() => {
							router.back();
						}}
						alt=""
						className="cursor-pointer"
					/>
					<p className="text-[24px] font-medium poppinsFont text-white">Notification Details</p>
				</div>
				<div className="w-full px-2">
					{notification && (
						<div className="w-full mt-[56px] px-[27px] flex flex-col items-center lg:block bg-white">
							<h1 className="lg:text-left text-center font-[500] mb-4 text-[20px] ">{notification.title}</h1>
							<p className="lg:text-left text-[20px]  text-gray-500 mb-7">{notification.message}</p>
							<p className="lg:text-left text-center font-[500] mb-4 text-[20px]">Are you ready to file a complaint?</p> {/*the notification response message*/}
							<button className="mx-auto text-white bg-eccblue w-[192px] h-[60px] rounded-[12px] mt-[15px]">File a Complaint</button> {/*action button depending on the type of notification*/}
						</div>
					)}
				</div>
			</motion.div>
		</NavWrapper>
	);
};

export default notificationDetails;
