interface ComplaintProps {
	title: string;
	complaintContent: string;
	date: string;
	author: string;
	status: boolean;
}
export const Complaint: React.FC<ComplaintProps> = ({ title, complaintContent, author, date, status }) => {
	return (
		<div>
			<p className="text-left font-semibold">{title}</p>
			<p className="mt-3 font-extralight">{complaintContent}</p>
			<p className="mt-5 text-[12px] font-extralight">
				{date} by <span className="text-eccblue">{author}</span>
			</p>
			<div className={`${status ? "bg-success" : "bg-danger"} w-28 py-3 rounded-xl mt-11 text-white text-center select-none`}>{status ? "OPEN" : "CLOSED"}</div>
		</div>
	);
};
