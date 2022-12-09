import type { NextPage } from "next";
import Image from "next/image";
import manFreakedOut from "@/images/man-freaked-out-2.png";
import { useState, useEffect, useContext } from "react";
import DashboardCard from "../../Components/DashboardComponents/DashboardCard";
import NavWrapper from "../../Components/DashboardNav/NavWrapper";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { NotificationContext } from "../../Components/Contexts/NotificationContext";
import { UserContext } from "../../Components/Contexts/UserContext";
import { motion } from "framer-motion";

interface User {
	firstName: string;
	lastName: string;
	_id: string;
	iat: number;
}

const Index: NextPage = () => {
	const [cookie, setCookie] = useCookies(["user"]);
	const { fetchNotificationData } = useContext(NotificationContext);
	const { user, setUser } = useContext(UserContext);

	const router = useRouter();
	useEffect(() => {
		if (!cookie.user) {
			router.replace("/login");
		} else {
			setUser(cookie.user);
			console.log(cookie.user);
			setInterval(() => fetchNotificationData(), 30000);
		}
	}, []);

	return (
		<NavWrapper>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
				className="h-full"
			>
				<div className="pb-[50px] px-3">
					<div className="hidden lg:block">
						<div className="bg-[#020D1B] w-full max-h-[255px] mt-10 rounded-[20px] flex flex-row justify-between items-center relative">
							<div className="text-white pl-[23px] xl:pl-[43px] w-full flex flex-col justify-center">
								<p className="text-[30px] xl:text-[40px] font-[600]">Hi, {user.firstName}</p>
								<p className="mt-2 xl:mt-[13px] text-[20px] xl:text-[24px] leading-[25px] xl:leading-[36px]">
									Vendor don do you strong thing again? <br /> We are ready to listen to your complaints
								</p>
							</div>
							<div className="h-[285.54px] w-[377.72px] relative bottom-[14px] right-[10px] xl:right-[21px] shrink-0">
								<Image
									src={manFreakedOut}
									layout="fill"
									objectFit="contain"
									alt="a man freaked out"
								/>
							</div>
						</div>
						<div className="mt-[59px] mx-auto">
							<DashboardCard />
						</div>
					</div>
					<div className="lg:hidden block">
						<div className="flex flex-row justify-center">
							<div className="flex flex-col items-center w-full">
								<div className="bg-[#020D1B] mt-12 rounded-[10px] h-fit flex flex-row justify-between items-center w-full">
									<div className="flex flex-col py-[14px] sm:py-[25px] text-white pl-3 sm:pl-[20px]">
										<p className="text-[16px] sm:text-[20px] font-semibold">Hi, {user.firstName}</p>
										<p className="mt-[4px] text-[12px] sm:text-[16px] leading-[15px] sm:leading-[20px]">
											Vendor don do you strong thing again?
											<br />
											We are ready to listen to your complaints
										</p>
									</div>
									<div className="relative w-[149px] h-[110px] top-0 min-[320px]:top-[3px] min-[392px]:top-0 sm:top-[7px] shrink-0">
										<Image
											src={manFreakedOut}
											alt="A man freaked out"
											layout="fill"
											objectFit="contain"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-[35px] mx-auto">
							<DashboardCard />
						</div>
					</div>
				</div>
			</motion.div>
		</NavWrapper>
	);
};

export default Index;
