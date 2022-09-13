import SideNav from "./SideNav";
import TopNav from "./TopNav";

interface NavWrapperProps {
	children: JSX.Element;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	return (
		<>
			<SideNav />
			<TopNav />
			<div className="pl-[295px] pt-[126px] min-h-screen min-w-screen bg-clearblue">
				<div className="bg-clearblue w-full min-h-[calc(100vh-126px)] pl-[30px] pr-[40px] pt-[55px] pb-[43px]">{children}</div>
			</div>
		</>
	);
};
export default NavWrapper;
