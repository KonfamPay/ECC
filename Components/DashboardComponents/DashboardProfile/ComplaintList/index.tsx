import ComplaintData from "./../../../Complaint/ComplaintData";
import { useState } from "react";

import { useRouter } from "next/router";

import PreviousNextButton from "../previousNextButton";

interface ComplaintProps {
	page: string;
	pageNumber: number;
	setPageNumber: any;
}

const ComplaintList: React.FC<ComplaintProps> = ({ page, pageNumber, setPageNumber }) => {
	const [maxNumber, setMaxNumber] = useState(3);

	const filteredList = ComplaintData.filter((complaint) => complaint.status == page);

	const list = filteredList.length === 0 ? ComplaintData : filteredList;
	const router = useRouter();

	return (
		<div className="w-full h-full mt-6 pb-6 px-2">
			{list.length > -1 && list.length > 5 ? (
				<ul className=" mx-auto">
					{list.slice((pageNumber - 1) * maxNumber, maxNumber * pageNumber).map((complaint) => (
						<li
							className="flex flex-col mx-auto ml-4 mb-6 cursor-pointer"
							onClick={() => {
								router.push({ pathname: "/dashboard/complaintDetails/", query: { id: complaint.grievanceId } });
							}}
						>
							<p className=" mt-2 text-[12px] lg:text-[16px] text-gray-500">{`${complaint.description.split(" ").splice(0, 12).join(" ")}...`}</p>
							<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
						</li>
					))}
				</ul>
			) : (
				<ul className=" mx-auto">
					;
					{list.map((complaint) => (
						<li
							className="flex flex-col mx-auto ml-4 mb-6"
							onClick={() => router.push("/dashboard/complaintDetails/" + complaint.grievanceId)}
						>
							<p className="text-[14px] font-semibold">{`${complaint.title.split(" ").splice(0, complaint.title.length).join(" ")}...`}</p>
							<p className=" mt-2 text-[12px] text-gray-500">{`${complaint.description.split(" ").slice(0, 12).join(" ")}...`}</p>
							<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
						</li>
					))}
				</ul>
			)}

			<PreviousNextButton
				maxNumber={maxNumber}
				setPageNumber={setPageNumber}
				listLength={list.length}
				pageNumber={pageNumber}
			/>
		</div>
	);
};

export default ComplaintList;
