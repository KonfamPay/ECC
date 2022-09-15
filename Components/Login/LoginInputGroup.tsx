import { motion } from "framer-motion";
import React, { ChangeEvent } from "react";

interface InputGroupProps {
	label: string;
	placeholder: string;
	value: string;
	setValue: any;
	type: string;
	errorMessage?: string;
}

export const LoginInputGroup: React.FC<InputGroupProps> = ({ label, placeholder, value, setValue, type, errorMessage }) => {
	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value.trim());
	};
	return (
		<div>
			<p className="text-[14px] md:text-[16px] lg:text-[20px]">{label}</p>
			<input
				value={value}
				onChange={changeValue}
				className="transition-[150ms] text-[11px] placeholder:text-[11px] md:text-[14px] md:placeholder:text-[14px] lg:text-[16px] lg:placeholder:text-[16px] py-[13px] md:py-[20px] xl:py-[25px] px-[15px] lg:px-[20px] focus:outline-0 rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue"
				placeholder={placeholder}
				type={type}
			/>
			{errorMessage && (
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-[13px] md:text-[15px] lg:text-[18px] mt-[5px] text-red-500 font-medium"
				>
					{errorMessage}
				</motion.p>
			)}
		</div>
	);
};
