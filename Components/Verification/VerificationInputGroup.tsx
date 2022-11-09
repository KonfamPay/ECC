import { motion } from "framer-motion";

interface InputGroupProps {
	label: string;
	placeholder: string | null;
	value: string;
	setValue: any;
	type: string;
	className?: string;
	maxlength?: number;
	errorMessage?: string;
	max?: string;
}

const VerificationInputGroup: React.FC<InputGroupProps> = ({ label, placeholder, value, setValue, type, className, maxlength, max, errorMessage }) => {
	return (
		<div className={className || ""}>
			<p className="text-[14px] lg:text-[20px] mb-[5px]">{label}</p>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[20px] px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[15px] w-full focus:border-eccblue text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px]"
				placeholder={placeholder ? placeholder : undefined}
				type={type}
				maxLength={maxlength || 255}
				max={max ? max : undefined}
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
export default VerificationInputGroup;
