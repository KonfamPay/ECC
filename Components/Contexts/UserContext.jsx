import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		_id: "",
		iat: 0,
    });
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;