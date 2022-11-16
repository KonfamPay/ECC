import { useRouter } from "next/router";
interface TableProps {
	ScamData: any;
	maxNumber: number;
	pageNumber: number;
	setSelect: any;
	selected: any;
	// setOperation: any;
	// setOperationType: any;
	// setScamId: any;
	// isOperation: boolean;
}

const ScamTable: React.FC<TableProps> = ({ ScamData, maxNumber, pageNumber, selected, setSelect }) => {
	const router = useRouter();
	return (
		<>
			{ScamData.length > -1 && (
				<table className="w-full table-auto  ">
					<thead className="border-y border-y-[#e4e4ef]  border-solid">
						<tr>
							<th>
								<button className="w-[24px] ml-4 my-4 h-[24px] border border-solid border-[#e4e4e7]"></button>
							</th>
							<th>Scammer</th>
							<th>Bank Account Details</th>
							<th>Phone Number</th>

							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ScamData.slice(maxNumber * (pageNumber - 1), maxNumber * pageNumber).map((scam: any) => (
							<tr
								key={scam.id}
								className="  border-y border-y-[#e4e4ef] bg-white"
							>
								<td>
									<button
										onClick={() => {
											setSelect(scam.scamId);
										}}
										className={`w-[24px] ${selected.includes(scam.scamId) && `bg-eccblue`} flex justify-center items-center ml-4 h-[24px]  border border-solid border-[#e4e4e7]`}
									>
										<img
											src=".././icons/check-white.svg"
											alt=""
										/>
									</button>
								</td>
								<td
									onClick={() => {}}
									className="cursor-pointer flex flex-col"
								>
									<p className="font-semibold">{scam.scammer}</p>
									<p>{scam.website.input1}</p>
								</td>

								<td>{scam.bankAccountDetails.input1}</td>
								<td>{scam.phoneNumber.input1}</td>

								<td>
									<button
										className="bg-eccblue p-1 rounded-md text-white "
										onClick={() => {
											// setOperation(true);
											// setOperationType("edit");
											// setUserId(scam.scamId);
											router.push({ pathname: "/admin/latest/scam-details", query: { id: scam.scamId } });
										}}
									>
										View details
									</button>
								</td>
								<td>
									<button
										// disabled={isOperation}
										className=""
										onClick={() => {
											// setOperation(true);
											// setOperationType("delete");
											// setUserId(user.userId);
										}}
									>
										<img
											src="../icons/admin-icons/delete.svg"
											alt=""
										/>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default ScamTable;
