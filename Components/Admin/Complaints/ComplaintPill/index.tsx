import { useRouter } from "next/router";
interface ComplaintPillProps {
	complaint: any;
	users: any;
}

const ComplaintPill: React.FC<ComplaintPillProps> = ({ users, complaint }) => {
	const router = useRouter();
	const user = users.filter((user: any) => user.complaints.find((complaintId: string) => complaintId == complaint.grievanceId))[0];
	return (
		<div className="h-fit p-4 bg-white border-b border-solid border-[#c5c5c5;] w-full">
			{user && (
				<div>
					<div className="w-full flex justify-between items-center">
						<div
							className="flex flex-row gap-x-4 cursor-pointer"
							onClick={() => {
								router.push({ pathname: "/admin/complaints/details", query: { id: complaint.grievanceId } });
							}}
						>
							<div>
								<img
									src={user.profilePic}
									alt=""
								/>
							</div>
							<div className="flex flex-col ">
								<p className="font-semibold text-[14px]">{user.userName}</p>
								<p className="font-regular text-[12px]">{complaint.date}</p>
							</div>
						</div>
						<div className="flex gap-x-2 flex-row">
							<p className=" text-[14px] text-black">GrievanceId:</p>
							<p className=" text-[16px] text-eccblue">{complaint.grievanceId}</p>
							<img
								className="cursor-pointer"
								onClick={() => {
									alert("id has been copied to clipboard");
									navigator.clipboard.writeText(complaint.grievanceId);
								}}
								src="../../../icons/admin-icons/copy.svg"
								alt=""
							/>
						</div>
					</div>

					<div className="w-full mt-[16ppx] font-medium text-[20px] ">{complaint.title}</div>

					<div className="w-full mt-1 font-regular text-[14px]">{complaint.description}</div>
					<div className="w-full flex justify-end">
						<p className={` p-1 rounded-md text-white ${complaint.status === "Open" && " bg-[#EF2E2E]"} ${complaint.status === "Resolved" && " bg-success"} ${complaint.status === "Closed" && " bg-[#666666]"} ${complaint.status === "Pending" && " bg-[#FFB330]"}`}>{complaint.status}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ComplaintPill;
