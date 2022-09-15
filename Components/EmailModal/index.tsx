import { Router, useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface EmailModalProps {
	setEmailModalShowing: Dispatch<SetStateAction<boolean>>;
}
export const EmailModal: React.FC<EmailModalProps> = ({ setEmailModalShowing }) => {
	const router = useRouter();
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.7 }}
				transition={{ duration: 0.2 }}
				className="fixed top-0 bottom-0 left-0 right-0 bg-black z-20 opacity-70"
			></motion.div>
			<div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center px-[80px]">
				<motion.div
					initial={{ opacity: 0, y: 65 }}
					animate={{ opacity: 1, y: -10 }}
					transition={{ delay: 0.2 }}
					className="relative w-full max-w-[828px] py-[59px] bg-white rounded-[12px] flex flex-col items-center px-[20px]"
				>
					<img src="/icons/successfulIcon.svg" />
					<p className="text-[40px] font-medium">Successful!</p>
					<p className="text-[20px] leading-[51px] max-w-[531px] text-center font-medium">
						A link has been to your email to reset your password. <br />
						Kindly use the link to reset the password
					</p>
					<img
						onClick={() => {
							setEmailModalShowing(false);
							setTimeout(() => router.push("/login"), 500);
						}}
						className="absolute right-[20px] sm:right-[42px] top-[20px] sm:top-[32px] cursor-pointer"
						src="/Images/x-close.svg"
					/>
				</motion.div>
			</div>
		</>
	);
};
