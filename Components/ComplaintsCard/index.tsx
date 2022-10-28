import LottieAnimation from "../LottieAnimation";
import animationData from "../../public/lotties/eccLoader.json";
import { motion } from "framer-motion";

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
		<div className="lg:w-full w-[90%] lg:px-[75px] lg:h-full px-[25px] mx-auto py-[30px] lg:py-[45px] bg-white poppinsFont flex items-center lg:justify-center justify-around gap-x-[52px] rounded-[15px] max-w-[438px]">
			{!loading && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						style={{ backgroundColor: iconBg }}
						className={`lg:w-[80px] lg:h-[80px] w-[75px] h-[75px] lg:rounded-[27.2px] rounded-[16px] flex items-center justify-center`}
					>
						<img
							className="lg:w-[36px] lg:h-[36px] w-[22px] h-[20px]"
							src={icon}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<p
							style={{ color: textColor }}
							className={`lg:text-[48px] text-[32px] text-left font-medium -mt-2`}
						>
							{number}
						</p>
						<p className="font-medium opacity-60 -mt-2">{text}</p>
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
