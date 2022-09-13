import React from "react";
import { ButtonLoader } from "../../Components";
import { motion } from "framer-motion";

interface AsyncSubmitButtonProps {
	onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
	text: string;
	loading: boolean;
}

export const AsyncSubmitButton: React.FC<AsyncSubmitButtonProps> = ({ onSubmit, text, loading }) => {
	return (
		<button
			onClick={onSubmit}
			className=" w-full h-[50px] mx-auto lg:w-full lg:text-[20px] text-white lg:h-[66px] xl:h-[74px] rounded-xl bg-eccblue active:scale-95 transition-[200ms] lg:font-semibold"
		>
			{loading && <ButtonLoader />}
			{!loading && (
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					{text}
				</motion.span>
			)}
		</button>
	);
};
