import { ComplaintsCard } from "..";
import { useState, useEffect } from "react";
import client from "../../pages/api/Services/AxiosClient";
import { useCookies } from "react-cookie";

const ComplaintsCardSection = () => {
	const [cookie, setCookie] = useCookies(["user"]);
	const [complaintNumbers, setComplaintNumbers] = useState({
		pending: "",
		open: "",
		resolved: "",
		closed: "",
	});
	const [loading, setLoading] = useState(false);
	const fetchComplaintNumbers = async () => {
		try {
			setLoading(true);
			const { data } = await client.get(`/complaints/numbers/${cookie.user._id}`);
			setComplaintNumbers(data);
		} catch (err) {
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchComplaintNumbers();
	}, []);
	return (
		<div className="flex flex-col gap-y-[39px]">
			<ComplaintsCard
				icon="/Images/pendingIcon.svg"
				number={complaintNumbers.pending}
				iconBg="#FFFCB5"
				textColor="#FFB330"
				loading={loading}
				text="Pending Complaints"
			/>
			<ComplaintsCard
				icon="/Images/openComplaintsIcon.svg"
				number={complaintNumbers.open}
				iconBg="#FFBDBD"
				textColor="#F93939"
				loading={loading}
				text="Open Complaints"
			/>
			<ComplaintsCard
				icon="/Images/resolvedComplaintsIcon.svg"
				number={complaintNumbers.resolved}
				iconBg="#BDFFBD"
				textColor="#008000"
				loading={loading}
				text="Resolved Complaints"
			/>
			<ComplaintsCard
				icon="/Images/closedComplaintsIcon.svg"
				number={complaintNumbers.closed}
				iconBg="#DDDDDD"
				textColor="#666666"
				loading={loading}
				text="Closed Complaints"
			/>
		</div>
	);
};

export default ComplaintsCardSection;
