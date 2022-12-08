import LottieAnimation from "../LottieAnimation";
import animationData from "../../public/lotties/eccLoader.json";
import { motion } from "framer-motion";
import Image from "next/image";

interface ComplaintsCardProps {
	icon: string;
	iconBg: string;
	textColor: string;
	text: string;
	number: string;
	loading: boolean;
}

export const ComplaintsCard: React.FC<ComplaintsCardProps> = ({ icon, iconBg, textColor, text, number, loading }) => {
	return (
		<div className="lg:w-full w-[90%] lg:px-[10px] xl:px-[50px] h-full xl:h-[182px] px-[26px] mx-auto lg:mx-0 py-[30px] lg:py-[20px] xl:py-[45px] bg-white poppinsFont flex xl:flex-row justify-around items-center gap-x-[38px] xl:gap-x-[52px] rounded-[15px] max-w-[438px] xl:max-w-full">
			{!loading && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						style={{ backgroundColor: iconBg }}
						className={`xl:w-[80px] xl:h-[80px] w-[65px] h-[65px] lg:rounded-[27.2px] rounded-[16px] flex items-center justify-center`}
					>
						<div className="relative w-[25px] xl:w-[30px] h-[25px] xl:h-[30px]">
							<Image
								src={icon}
								alt="Icon"
								layout="fill"
								objectFit="contain"
							/>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<div className="flex flex-col justify-around items-center xl:items-start">
							<p
								style={{ color: textColor }}
								className={`xl:text-[48px] text-[32px] font-medium -mt-2`}
							>
								{number}
							</p>
							<p className="font-medium text-[15px] xl:text-[18px] opacity-60 -mt-2 -tracking-[0.02em] text-center xl:text-left">{text}</p>
						</div>
					</motion.div>
				</>
			)}
			{loading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<LottieAnimation
						animationData={animationData}
						height={50}
						width={50}
					/>
				</motion.div>
			)}
		</div>
	);
};
