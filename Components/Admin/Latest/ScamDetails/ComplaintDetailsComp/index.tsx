import { useState } from "react";

import { format } from "date-fns";

interface ComponentProps {
	complaint: any;
	isEdit: boolean;
}

const DetailsComponent: React.FC<ComponentProps> = ({ complaint, isEdit }) => {
	const [report, setReport] = useState(complaint.description);
	const [selectedFile, setSelectedFile] = useState({});

	const fileSelectHandler = (e: any) => {
		return;
	};
	return (
		<div className="h-full w-full flex flex-col items-center mb-6">
			<div className="w-[70%] ">
				<div className="w-full mb-[30px]">
					<h2 className="text-center my-4 text-[#999999] font-normal">{format(new Date(complaint.date), "dd,MMMM yyyy")}</h2>
					<h1 className=" mb-[10px] w-full border-b border-b-[#c5c5c5] text-eccblue text-[18px]">Report</h1>
					{!isEdit ? (
						<div className="w-full h-auto">{complaint.description}</div>
					) : (
						<textarea
							className="w-full   bg-white resize-none border  focus:border-eccblue focus:outline-none p-4 rounded-md "
							value={report}
							placeholder="write a report"
							onChange={(e) => {
								setReport(e.currentTarget.value);
							}}
						></textarea>
					)}
				</div>
				<div className="w-full mb-4">
					<h1 className=" mb-[10px] w-full flex flex-row border-b border-b-[#c5c5c5] text-eccblue text-[18px]">Upload Files</h1>
					{isEdit && (
						<div>
							<label htmlFor="file-input">
								<div className="border w-[70px] cursor-pointer hover:scale-110 h-[70px] rounded-md flex justify-center items-center border-dashed border-eccblue">
									<img
										src="../../icons/admin-icons/plusButton.svg"
										alt=""
									/>
								</div>
							</label>
							<input
								id="file-input"
								type="file"
								className="bg-eccblue hidden"
								onChange={(e) => fileSelectHandler(e)}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DetailsComponent;
