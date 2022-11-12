import { createContext, useState, useEffect } from  "react";
import { useCookies } from "react-cookie";
import client from "../../pages/api/Services/AxiosClient"


export const NotificationContext = createContext();

const NotificationContextProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState([]);
    const [cookies, setCookies] = useCookies(["user"]);
    
    const fetchNotificationData = async () => {
        const {data} = await client.get(`/notifications/${cookies.user._id}`);
        console.log(data)
        setNotificationData(data.notifications)
    }

    useEffect(() => {
        fetchNotificationData();
    }, [])

    return (
        <NotificationContext.Provider value={{notificationData}}>
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationContextProvider;