import ComplaintData from "./../../../Complaint/ComplaintData";
interface ComplaintProps {
	page: string;
}

const ComplaintList: React.FC<ComplaintProps> = ({ page }) => {
	const filteredList = ComplaintData.filter((complaint) => complaint.status == page);

	const list = filteredList.length === 0 ? ComplaintData : filteredList;

	return (
		<div className="w-full h-full mt-6">
			<ul className=" mx-auto">
				{list.map((complaint) => (
					<li className="flex flex-col mx-auto ml-4 mb-6">
						<p className="text-[14px] font-semibold">{`${complaint.title.split(" ").splice(0, 7).join(" ")}...`}</p>
						<p className=" mt-2 text-[12px] text-gray-500">{`${complaint.description.split(" ").splice(0, 12).join(" ")}...`}</p>
						<div className={`mt-4 text-white text-[12px] w-[75px] flex items-center justify-center rounded-md h-[35px] p-2 ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ComplaintList;
