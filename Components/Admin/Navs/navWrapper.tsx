import { useState } from "react";
import SideNav from "./sidenav";
import TopNav from "./topnav";

interface NavProps {
	children: JSX.Element;
}

const Wrapper: React.FC<NavProps> = ({ children }) => {
	return (
		<div className="flex bg-[#f0f0f0] flex-row">
			<SideNav
			// openSide={openSide}
			// open={isOpen}
			/>
			<div className="flex flex-col w-full">
				<TopNav /> {/* openSide={openSide} */}
				<div className="lg:block hidden">
					<div className="pl-[295px] pt-[126px] w-full h-[1024px] min-h-screen min-w-screen bg-[#f0f0f0]">
						<div className="bg-[#f0f0f0] w-full min-h-[calc(100vh-100px)] pl-[30px] pr-[40px] pt-[35px] pb-[43px]">{children}</div>
					</div>
				</div>
				<div className=" lg:hidden mt-[57.3px] w-full h-screen bg-clearblue">{children}</div>
			</div>
		</div>
	);
};

export default Wrapper;
