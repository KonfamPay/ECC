import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useState } from "react";

interface NavWrapperProps {
	children: JSX.Element;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openSide = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	return (
		<div className="">
			<SideNav
				openSide={openSide}
				open={isOpen}
			/>
			<TopNav openSide={openSide} />
			<div className="lg:block hidden">
				<div className="pl-[295px] pt-[126px] w-full h-screen min-h-screen min-w-screen bg-clearblue">
					<div className="bg-clearblue w-full min-h-[calc(100vh-126px)] pl-[30px] pr-[40px] pt-[0px] pb-[43px]">{children}</div>
				</div>
			</div>
			<div className=" lg:hidden w-full h-screen bg-clearblue">{children}</div>
		</div>
	);
};
export default NavWrapper;
