import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useState } from "react";

interface NavWrapperProps {
	children: JSX.Element;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const [Open, setIsOpen] = useState(false);

	const openSide = () => {
		setIsOpen(!Open);
	};

	return (
		<div className="flex flex-row">
			<SideNav
				openSide={openSide}
				open={Open}
			/>
			<div className="flex flex-col w-full">
				<TopNav openSide={openSide} />
				<div className="lg:block hidden">
					<div className="pl-[295px] pt-[126px] w-full h-screen min-h-screen min-w-screen bg-clearblue">
						<div className={`pl-[30px] pr-[40px] pt-[0px] bg-clearblue  w-full min-h-[calc(100vh-126px)]  pb-[43px]`}>{children}</div>
					</div>
				</div>
				<div className=" lg:hidden mt-[57.3px] w-full h-screen bg-clearblue">{children}</div>
			</div>
		</div>
	);
};
export default NavWrapper;
