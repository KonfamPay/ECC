import { useRouter } from "next/router";
import { Admin } from "./../../../../types/complaintTypes.d";
import { format } from "date-fns";

import { Dispatch, SetStateAction } from "react";

interface TableProps {
	AdminData: Array<Admin>;
	maxNumber: number;
	pageNumber: number;
	setSelect: (id: string) => void;
	selected: Array<string>;
	setShowing: Dispatch<SetStateAction<boolean>>;
	setAdminId: Dispatch<SetStateAction<string>>;
	setAction: Dispatch<SetStateAction<string>>;
}

const AdminTable: React.FC<TableProps> = ({ setShowing, setAdminId, setAction, AdminData, maxNumber, pageNumber, selected, setSelect }) => {
	const router = useRouter();
	return (
		<>
			{AdminData.length > -1 && (
				<table className="w-full table-auto  ">
					<thead className="border-y border-y-[#e4e4ef]  border-solid">
						<tr>
							<th>
								<button className="w-[24px] ml-4 my-4 h-[24px] border border-solid border-[#e4e4e7]"></button>
							</th>
							<th>Admins</th>
							<th>Date Registered</th>

							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{AdminData.slice(maxNumber * (pageNumber - 1), maxNumber * pageNumber).map((admin: Admin) => (
							<tr
								key={admin.id}
								className="  border-y border-y-[#e4e4ef] bg-white"
							>
								<td>
									<button
										onClick={() => {
											setSelect(admin.id);
										}}
										className={`w-[24px] ${selected.includes(admin.id) && `bg-eccblue`} flex justify-center items-center ml-4 h-[24px]  border border-solid border-[#e4e4e7]`}
									>
										<img
											src=".././icons/check-white.svg"
											alt=""
										/>
									</button>
								</td>
								<td className="cursor-pointer flex flex-col">
									<p className="font-semibold">{admin.username}</p>
									<p>{admin.email}</p>
								</td>

								<td>{format(new Date(admin.registered), "MMMM dd, yyyy")}</td>

								<td>
									<button
										className="bg-eccblue p-1 rounded-md text-white "
										onClick={() => {
											router.push({ pathname: "/admin/manage-admin/activities", query: { id: admin.id } });
										}}
									>
										View activities
									</button>
								</td>
								<td>
									<button
										className=""
										onClick={() => {
											setShowing(true);
											setAdminId(admin.id);
											setAction("delete");
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

export default AdminTable;
