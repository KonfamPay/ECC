import { Dispatch, SetStateAction } from "react";
interface ButtonProps {
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
	maxNumber: number;
	listLength: number;
}

const PreviousNextButton: React.FC<ButtonProps> = ({ pageNumber, setPageNumber, maxNumber, listLength }) => {
	return (
		<div className="flex flex-row gap-x-4  lg:pr-6 lg:text-[18px] text-[14px] font-semibold justify-center   w-full lg:justify-end">
			<button
				className="text-eccblue cursor-pointer rounded-md w-[100px] h-[35px] lg:w-[192px] lg:rounded-[12px] lg:h-[60px] border border-solid border-eccblue bg-clearblue"
				disabled={pageNumber === 1}
				onClick={() => {
					setPageNumber(pageNumber--);
				}}
			>
				previous
			</button>
			<button
				className="text-white cursor-pointer rounded-md w-[100px] h-[35px] lg:w-[192px] lg:h-[60px] lg:rounded-[12px] border border-solid border-eccblue bg-eccblue"
				disabled={listLength < maxNumber * pageNumber}
				onClick={() => {
					setPageNumber(pageNumber++);
				}}
			>
				next
			</button>
		</div>
	);
};

export default PreviousNextButton;
