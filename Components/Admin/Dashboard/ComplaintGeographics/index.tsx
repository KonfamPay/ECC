import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import { States } from "../../../../types/complaintTypes.d";
interface ComplaintGeographicsProps {
	states: States[];
}
const ComplaintGeographics: React.FC<ComplaintGeographicsProps> = ({ states }) => {
	const sortedStates = states.sort((a, b) => b.complaints - a.complaints);
	const topStates = sortedStates.slice(0, 11);
	return (
		<div className="bg-white rounded-[10px] h-[600px] w-full max-w-[600px] ">
			<div className="w-full flex flex-row justify-between items-center px-4 h-[70px] border-b border-[#c5c5c5] ">
				<h1 className="text-black text-[18px] font-medium">Recent Activity</h1>
				<button className="p-2 rounded-md text-eccblue bg-[#F1F7FE] text-[14px] hover:scale-110 transition-[1000ms] flex flex-row items-center gap-x-4">
					<img
						src="../../icons/admin-icons/download-icon.svg"
						alt=""
					/>
					<p> Download full report</p>
				</button>
			</div>
			<div className="w-fulll h-full ">
				<VictoryChart
					width={400}
					height={480}
					theme={VictoryTheme.grayscale}
					domainPadding={{ x: 100 }}
				>
					<VictoryBar
						labels={({ datum }) => ` ${datum.complaints}`}
						data={topStates}
						x="name"
						y="complaints"
						horizontal
						style={{ data: { fill: "#0B63C5" }, labels: { fontSize: 12, color: "#c5c5c5" } }}
						cornerRadius={{ top: 5 }}
						barWidth={20}
						width={100}
						height={28}
					/>
				</VictoryChart>
			</div>
		</div>
	);
};

export default ComplaintGeographics;
