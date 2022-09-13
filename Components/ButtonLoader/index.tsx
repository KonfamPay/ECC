import React from "react";
import { motion } from "framer-motion";

export const ButtonLoader = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex items-center justify-center"
		>
			<div className="w-[10px] h-[10px] rounded-full bg-white mr-[5px] loadingCircle"></div>
			<div className="w-[10px] h-[10px] rounded-full bg-white mr-[5px] loadingCircle"></div>
			<div className="w-[10px] h-[10px] rounded-full bg-white mr-[5px] loadingCircle"></div>
		</motion.div>
	);
};
