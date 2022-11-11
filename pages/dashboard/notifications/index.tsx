import type { NextPage } from "next";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import NotificationItem from "../../../Components/NotificationItem";
import { getServerSideProps } from "./../../../Components/NotificationItem/notificationData/index";
import { useRouter } from "next/router";

interface NotificationsPageProps {
	notificationData: { id: string;  title: string; additionalInfo: string; time: string }[];
}

const NotificationsPage: NextPage<NotificationsPageProps> = () => {
	const { props } = getServerSideProps();
	const { notificationData } = props;
	const router = useRouter();
	return (
		<NavWrapper>
			<div className="w-full h-[calc(100vh-170px)] rounded-[15px] overflow-hidden">
				<div className="py-[16px] pl-[54px] bg-eccblue">
					<p className="text-[24px] font-medium poppinsFont text-white">All Notifications</p>
				</div>
				<div className="pt-[39px] pb-[49px] bg-white flex flex-col gap-y-[40px] overflow-y-scroll h-[calc(100vh-220px)] custom-scrollbar">
					{notificationData.map((item: any, index: number) => (
						<div
							onClick={() => {
								router.push({ pathname: "/dashboard/notificationDetails", query: { id: item.id } });
							}}
						>
							<NotificationItem
								type={item.type}
								key={index}
								title={item.title}
								additionalInfo={item.additionalInfo}
								time={item.time}
								
							/>
						</div>
					))}
				</div>
			</div>
		</NavWrapper>
	);
};
export default NotificationsPage;
