import { useState } from "react";
import SideNav from "./sidenav";
import TopNav from "./topnav";

interface NavProps {
	children: JSX.Element;
}

const Wrapper: React.FC<NavProps> = ({ children }) => {
	return (
		<div className="flex flex-row h-screen ">
			<SideNav />

			<div className="flex flex-col w-full h-full">
				<TopNav />
				<div className=" h-screen  w-full bg-[#f0f0f0]">{children}</div>
			</div>
		</div>
	);
};

export default Wrapper;
