import ComplaintData from "./../../../Complaint/ComplaintData";
import { useState } from "react";
import { useRouter } from "next/router";
import PreviousNextButton from "../previousNextButton";
import { Dispatch, SetStateAction } from "react";

interface ComplaintProps {
	page: string;
	pageNumber: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
}

const ComplaintList: React.FC<ComplaintProps> = ({ page, pageNumber, setPageNumber }) => {
	const [maxNumber, setMaxNumber] = useState(3);

	const filteredList = ComplaintData.filter((complaint) => complaint.status == page);

	const list = filteredList.length === 0 ? ComplaintData : filteredList;
	const router = useRouter();

	return (
		<div className="w-full h-full mt-5 lg:mt-[30px] pb-6 px-3 lg:px-[40px]">
			{list.length > -1 && (
				<ul className="mx-auto flex flex-col items-start space-y-[15px] lg:space-y-[21px] w-full">
					{list.slice((pageNumber - 1) * maxNumber, maxNumber * pageNumber).map((complaint, index) => (
						<div key={index}>
							<li
								className="flex flex-col justify-center cursor-pointer w-full"
								onClick={() => {
									router.push({ pathname: "/dashboard/complaintDetails/", query: { id: complaint.grievanceId } });
								}}
							>
								<p className="text-[14px] lg:text-[18px] xl:text-[20px] font-semibold opacity-80 break-words">{`${complaint.title.split(" ").splice(0, 18).join(" ")}...`}</p>
								<p className="text-[12px] lg:text-[16px] text-gray-500">{`${complaint.description.split(" ").splice(0, 12).join(" ")}...`}</p>
								<div className={`mt-2 -tracking-[0.02em] text-white text-[12px] lg:text-[14px] w-[75px] flex items-center justify-center rounded-md h-[35px] py-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
							</li>
						</div>
					))}
				</ul>
			)}
			<div className="mt-3">
				<PreviousNextButton
					maxNumber={maxNumber}
					setPageNumber={setPageNumber}
					listLength={list.length}
					pageNumber={pageNumber}
				/>
			</div>
		</div>
	);
};

export default ComplaintList;
