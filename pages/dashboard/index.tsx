import type { NextPage } from "next";
import { useState, useEffect } from "react";
import DashboardCard from "../../Components/DashboardComponents/DashboardCard";
import NavWrapper from "../../Components/DashboardNav/NavWrapper";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

interface User {
	firstName: string;
	lastName: string;
	_id: string;
	iat: number;
}

const index: NextPage = (props) => {
	const [cookie, setCookie] = useCookies(["user"]);
	const [user, setUser] = useState<User>({
		firstName: "",
		lastName: "",
		_id: "",
		iat: 0,
	});
	const router = useRouter();
	useEffect(() => {
		if (!cookie.user) {
			//router.replace("/login");
		} else {
			setUser(cookie.user);
		}
	}, []);

	return (
		<NavWrapper>
			<div className="h-full">
				<div className="pt-0">
					<div className="hidden lg:block">
						<div className="bg-[#020D1B] mx-auto w-full h-[255px] mt-10 rounded-[20px] max-w-[2000px] flex flex-row relative">
							<div className="text-white w-[50%] pl-[43px] py-[58.5px]">
								<p className="text-[40px] leading-[60px] font-[600] ">Hi, {user.firstName}</p>
								<p className="text-[24px] leading-[36px] font-[600] pb-4 max-w-full w-[503px]">
									Vendor don do you strong thing again? <br /> We are ready to listen to your complaints
								</p>
							</div>
							<div className="w-[50%]">
								<img
									src="./images/man-freaked-out.png"
									className="absolute right-[21.28px] -top-[30.54px] h-[285.54px] max-w-full w-[377.72px] "
									alt=""
								/>
							</div>
						</div>
						<div className="mt-[59px] mx-auto  ">
							<DashboardCard />
						</div>
					</div>
					<div className="lg:hidden mt-6">
						<div className="flex flex-col items-center">
							<div className="bg-black w-[90%] mt-12 rounded-[10px]  h-fit flex flex-row justify-between items-center">
								<div className="flex flex-col w-[50%] py-4 text-white pl-4">
									<p className="text-[16px]">Hi, {user.firstName}</p>
									<p className="text-[12px]">
										Vendor don do you strong thing again?
										<br />
										We are ready to listen to your complaints
									</p>
								</div>

								<img
									className=" w-[149px] h-[95px] sm:w-[190px] sm:h-[140px]  sm:mb-3"
									src="./images/man-freaked-out.svg"
									alt=""
								/>
							</div>
						</div>
						<div className="mt-[59px] px-[12px]">
							<DashboardCard />
						</div>
					</div>
				</div>
			</div>
		</NavWrapper>
	);
};

export default index;
