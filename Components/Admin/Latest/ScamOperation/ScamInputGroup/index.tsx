interface InputGroupProps {
	label: string;
	errors: string;
	value: string;
	setValue: any;
}

const ScamInput: React.FC<InputGroupProps> = ({ label, errors, value, setValue }) => {
	return (
		<div className=" mx-auto flex mb-[20px] flex-col">
			<div className="flex w-full flex-col gap-y-[10px]">
				<label className="font-regular text-eccblue text-[18px] ">{label}</label>
				<input
					className="w-[250px] rounded-md border p-2 border-[#bdbcdb] h-[30px] focus:outline-none focus:border-eccblue"
					type="text"
					value={value}
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
				/>
			</div>
			{errors && <small className="">{errors}</small>}
		</div>
	);
};

export default ScamInput;
