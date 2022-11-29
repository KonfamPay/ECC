import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import client from "../../pages/api/Services/AxiosClient";

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
	const [notificationData, setNotificationData] = useState([]);
	const [cookies, setCookies] = useCookies(["user"]);
	const [newNotifications, setNewNotifications] = useState(false);

	const fetchNotificationData = async () => {
		const { data } = await client.get(`/notifications/${cookies.user._id}`);
		setNotificationData(data.notifications);
	};

	const markAllNotificationsAsRead = async () => {
		const { data } = await client.post(`/notifications/${cookies.user._id}/markAllAsRead`);
		console.log(data);
		setNotificationData(data.notifications);
	};

	useEffect(() => {
		setNewNotifications(notificationData.filter((notification) => notification.status == "unread").length > 0);
	}, [notificationData]);

	return <NotificationContext.Provider value={{ notificationData, fetchNotificationData, newNotifications, markAllNotificationsAsRead }}>{children}</NotificationContext.Provider>;
};

export default NotificationContextProvider;
