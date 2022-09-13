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
			<div className="flex flex-row space-x-[13px]">
				<p className="text-[20px]">
					{label} <span className="text-danger">*</span>
				</p>
				<img
					src="./icons/fac-help.svg"
					alt=""
				/>
			</div>
			<div className="relative">
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className={`transition-[150ms] py-[20px] xl:py-[25px] ${nairaSymbol ? "" : ""} focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-eccblue placeholder:text-[#C5C5C5] cursor-pointer ${nairaSymbol ? "px-[52px]" : "px-[20px] "}`}
					placeholder={placeholder ? placeholder : undefined}
					type={type}
				/>
				{nairaSymbol && (
					<img
						src="./icons/naira.svg"
						alt=""
						className="w-[22px] h-[22px] absolute left-[20px] top-[50%] translate-y-[-30%]"
					/>
				)}
			</div>
		</div>
	);
};
export default FileAComplaintInput;
