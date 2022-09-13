import { VentComplaintsCard } from "../";
import { useState } from "react";

export const VentComplaintsCardsContainer: React.FC = (props) => {
	const [VentComplaintsCardInfo, setVentComplainsCardInfo] = useState([
		{
			id: 1,
			title: "E-Complaints",
			description: "Delay in delivery, no delivery from vendors, blocked after payment",
		},
		{
			id: 2,
			title: "Investment Scams",
			description: "Ponzi-Scheme related issues, ",
		},
		{
			id: 3,
			title: "E-Complaints",
			description: "Delay in delivery, no delivery from vendors, blocked after payment",
		},
		{
			id: 4,
			title: "E-Complaints",
			description: "Delay in delivery, no delivery from vendors, blocked after payment",
		},
		{
			id: 5,
			title: "E-Complaints",
			description: "Delay in delivery, no delivery from vendors, blocked after payment",
		},
	]);
	return (
		<div className="flex flex-col gap-7 max-w-[472px] px-[20px]">
			{VentComplaintsCardInfo.map((VentComplaintCard) => (
				<VentComplaintsCard
					title={VentComplaintCard.title}
					description={VentComplaintCard.description}
					opacity={(100 - VentComplaintsCardInfo.indexOf(VentComplaintCard) * 19) / 100}
					key={VentComplaintCard.id}
				/>
			))}
		</div>
	);
};
