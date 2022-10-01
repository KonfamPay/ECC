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
			<div className="w-full h-screen rounded-[15px] lg:pt-[0px] pt-[60px] lg:overflow-hidden">
				<div className="py-[20px] flex flex-row gap-4 pl-4  bg-eccblue">
					<img
						src="/icons/arrow.svg"
						onClick={() => {
							router.back();
						}}
						alt=""
					/>
					<p className="text-[24px] font-medium poppinsFont text-white">Notification Details</p>
				</div>
				<div className="w-full mt-4">
					<h1 className="text-center font-semibold text-[18px] ">{notification.title}</h1>
					<p className="text-center text-gray-500">{notification.additionalInfo}</p>
				</div>
			</div>
		</NavWrapper>
	);
};

export default notificationDetails;
