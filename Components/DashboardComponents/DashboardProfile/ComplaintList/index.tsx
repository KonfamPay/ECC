import ComplaintData from "./../../../Complaint/ComplaintData";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
interface ComplaintProps {
	page: string;
	pageNumber: number;
	setPageNumber: any;
}

const ComplaintList: React.FC<ComplaintProps> = ({ page, pageNumber, setPageNumber }) => {
	const [maxNumber, setMaxNumber] = useState(3);
	const w = window.innerWidth;

	const filteredList = ComplaintData.filter((complaint) => complaint.status == page);

	const list = filteredList.length === 0 ? ComplaintData : filteredList;
	const router = useRouter()

	return (
		<div className="w-full h-full mt-6 pb-6 px-2">
			{list.length > -1 && list.length > 5 ? (
			<ul className=" mx-auto">
				{list.slice((pageNumber - 1) * maxNumber, maxNumber * pageNumber).map((complaint) => (
						<li className="flex flex-col mx-auto ml-4 mb-6 cursor-pointer" onClick={() => {
							router.push({pathname:'/dashboard/complaintDetails/' ,query: {id: complaint.grievanceId}})
						}}
						>
							<p className="text-[14px] font-semibold">{`${w === 1200 ? complaint.title.split(" ").splice(0, 7).join(" ") : complaint.title.split(" ").splice(0, complaint.title.length).join(" ")}...`}</p>
							<p className=" mt-2 text-[12px] lg:text-[16px] text-gray-500">{`${complaint.description.split(" ").splice(0, 12).join(" ")}...`}</p>
							<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
						</li>
				))}
			</ul>
			) : (
				<ul className=" mx-auto">
					{list.map((complaint) => (
							<li className="flex flex-col mx-auto ml-4 mb-6 cursor-pointer" onClick={() => {
								router.push({pathname:'/dashboard/complaintDetails/' ,query: {id: complaint.grievanceId}})
							}}
							>
								<p className="text-[14px] font-semibold">{`${w === 1200 ? complaint.title.split(" ").splice(0, 7).join(" ") : complaint.title.split(" ").splice(0, complaint.title.length).join(" ")}...`}</p>
								<p className=" mt-2 text-[12px] text-gray-500">{`${complaint.description.split(" ").slice(0, 12).join(" ")}...`}</p>
								<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
							</li>
					))}
				</ul>
			)}

			<div className="flex flex-row gap-x-4  lg:pr-6 lg:text-[18px] text-[14px] font-semibold justify-center   w-full lg:justify-end">
				<button
					className="text-eccblue rounded-md w-[100px] h-[35px] lg:w-[192px] lg:rounded-[12px] lg:h-[60px] border border-solid border-eccblue bg-clearblue"
					disabled={pageNumber === 1}
					onClick={() => {
						setPageNumber(pageNumber--);
					}}
				>
					previous
				</button>
				<button
					className="text-white rounded-md w-[100px] h-[35px] lg:w-[192px] lg:h-[60px] lg:rounded-[12px] border border-solid border-eccblue bg-eccblue"
					disabled={list.length < maxNumber * pageNumber}
					onClick={() => {
						setPageNumber(pageNumber++);
						console.log(typeof w);
					}}
				>
					next
				</button>
			</div>
		</div>
	);
};

export default ComplaintList;
