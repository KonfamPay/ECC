import { ComplaintsCard } from "../../Components";

const ComplaintsCardSection = () => {
	return (
		<div className="flex flex-col gap-y-[39px]">
			<ComplaintsCard
				icon="/Images/pendingIcon.svg"
				number={28}
				iconBg="#FFFCB5"
				textColor="#FFB330"
				text="Pending Complaints"
			/>
			<ComplaintsCard
				icon="/Images/openComplaintsIcon.svg"
				number={18}
				iconBg="#FFBDBD"
				textColor="#F93939"
				text="Pending Complaints"
			/>
			<ComplaintsCard
				icon="/Images/resolvedComplaintsIcon.svg"
				number={18}
				iconBg="#BDFFBD"
				textColor="#008000"
				text="Resolved Complaints"
			/>
			<ComplaintsCard
				icon="/Images/closedComplaintsIcon.svg"
				number={18}
				iconBg="#DDDDDD"
				textColor="#666666"
				text="Closed Complaints"
			/>
		</div>
	);
};

export default ComplaintsCardSection;
