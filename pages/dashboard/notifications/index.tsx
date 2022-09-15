import type { NextPage } from "next";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import NavItem from "../../../Components/NavBar/NavItem";
import NotificationItem from "../../../Components/NotificationItem";

const NotificationsPage: NextPage = ({ notificationData }) => {
	return (
		<NavWrapper>
			<div className="w-full rounded-[15px] overflow-hidden">
				<div className="py-[16px] pl-[54px] bg-eccblue">
					<p className="text-[24px] font-medium poppinsFont text-white">All Notifications</p>
				</div>
				<div className="pt-[39px] bg-white flex flex-col gap-y-[40px]">
					{notificationData.map((item, index) => (
						<NotificationItem
							key={index}
							title={item.title}
							additionalInfo={item.additionalInfo}
							time={item.time}
						/>
					))}
				</div>
				<div className="pt-[42px] pb-[15px] bg-white pr-[75px] flex justify-end">
					<button className="text-[18px] text-white bg-eccblue w-[192px] h-[60px] focus:outline-none rounded-xl">Next</button>
				</div>
			</div>
		</NavWrapper>
	);
};
export default NotificationsPage;

export const getServerSideProps = () => {
	return {
		props: {
			notificationData: [
				{
					title: "You account has been successfully verified",
					additionalInfo: "You still need to verify your account in order to be able to file a complaint against......",
					time: "24 mins ago...",
				},
				{
					title: "You account has been successfully verified",
					additionalInfo: "You still need to verify your account in order to be able to file a complaint against......",
					time: "19-07-2022",
				},
				{
					title: "You account has been successfully verified",
					additionalInfo: "You still need to verify your account in order to be able to file a complaint against......",
					time: "2 hours ago",
				},
				{
					title: "You account has been successfully verified",
					additionalInfo: "You still need to verify your account in order to be able to file a complaint against......",
					time: "3 days ago",
				},
				{
					title: "You account has been successfully verified",
					additionalInfo: "You still need to verify your account in order to be able to file a complaint against......",
					time: "12-04-2022",
				},
				{
					title: "You account has been successfully verified",
					additionalInfo: "You still need to verify your account in order to be able to file a complaint against......",
					time: "19-07-2022",
				},
			],
		},
	};
};
