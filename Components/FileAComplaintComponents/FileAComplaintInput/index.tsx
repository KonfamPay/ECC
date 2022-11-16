interface FileAComplaintInputProps {
	label: string;
	placeholder: string | null;
	value: string;
	setValue: any;
	type: string;
	nairaSymbol: boolean | null;
}

const FileAComplaintInput: React.FC<FileAComplaintInputProps> = ({ label, placeholder, value, setValue, type, nairaSymbol }) => {
	return (
		<div>
			<div className="flex flex-row space-x-[12px] items-center mb-[8px] xl:mb-[14px]">
				<p className="text-[14px] lg:text-[20px] w-fit">
					{label} <span className="text-danger">*</span>
				</p>
				<img
					className="w-[21px] h-[21px] lg:w-[28px] lg:h-[28px]"
					src="../icons/fac-help.svg"
					alt=""
				/>
			</div>
			<div className="relative">
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className={`transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[25px] ${nairaSymbol ? "" : ""} focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue text-[10px] sm:text-[13px] lg:text-[16px] placeholder:text-[10px] sm:placeholder:text-[13px] lg:placeholder:text-[16px] placeholder:text-[#C5C5C5] cursor-pointer ${nairaSymbol ? "px-[37.81px]" : "px-[12px] lg:px-[20px]"}`}
					placeholder={placeholder ? placeholder : undefined}
					type={type}
				/>
				{nairaSymbol && (
					<img
						src="../icons/naira.svg"
						alt=""
						className="w-[20px] h-[20px] absolute left-[12px] top-[50%] translate-y-[-30%]"
					/>
				)}
			</div>
		</div>
	);
};
export default FileAComplaintInput;
