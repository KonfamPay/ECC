import { getServerSideProps } from "./../../../Components/NotificationItem/notificationData/index";
import { useRouter } from "next/router";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";

const notificationDetails = () => {
	const router = useRouter();
	const notifiactionId = router.query.id;
	const { props } = getServerSideProps();
	const { notificationData } = props;
	const notification = notificationData.filter((notification) => notification.id == notifiactionId)[0];

	return (
		<NavWrapper>
			<div
				className="w-full h-screen
			 bg-white rounded-[15px] lg:pt-[0px]  lg:overflow-hidden"
			>
				<div className="py-[20px] flex flex-row gap-4 pl-4 w-full  bg-eccblue">
					<img
						src="/icons/arrow.svg"
						onClick={() => {
							router.back();
						}}
						alt=""
					/>
					<p className="text-[24px] font-medium poppinsFont text-white">Notification Details</p>
				</div>
				<div className="w-full px-2">
					{notification && (
						<div className="w-full mt-6 flex flex-col items-center lg:block bg-white">
							<h1 className="lg:text-left text-center font-semibold mb-4 text-[18px] ">{notification.title}</h1>
							<p className="lg:text-left  text-gray-500 mb-7">{notification.additionalInfo}</p>
							<p className="lg:text-left text-center font-semibold mb-4 text-[16px]">Ae you ready to file a complaint</p> {/*the notification response message*/}
							<button className="mx-auto text-white bg-eccblue w-[160px] h-[40px] rounded-md ">File a Complaint</button> {/*action button depending on the type of notification*/}
						</div>
					)}
				</div>
			</div>
		</NavWrapper>
	);
};

export default notificationDetails;
