import { Dispatch, SetStateAction } from "react";

interface InputGroupProps {
	label: string;
	errors: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const OperationsInput: React.FC<InputGroupProps> = ({ label, errors, value, setValue }) => {
	return (
		<div className="w-[90%] mx-auto flex mb-[30px] flex-col">
			<div className="flex w-full flex-row justify-between">
				<label className="font-regular text-[18px] ">{label}</label>
				<input
					className="w-[301px] rounded-md border p-2 border-[#bdbcdb] h-[40px] focus:outline-none focus:border-eccblue"
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

export default OperationsInput;
