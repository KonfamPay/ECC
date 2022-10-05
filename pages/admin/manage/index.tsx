import Wrapper from "../../../Components/Admin/Navs/navWrapper";

import { useState } from "react";

import UserData from "./../../../Components/Admin/userData";
import SearchBar from "../../../Components/Admin/searchbar";
import PaginationSection from "../../../Components/LatestScams/PaginationSection";

const Manage = () => {
	const [userData, setData] = useState(UserData);
	const [maxNumber, setMaxNumber] = useState(8);
	const [pageNumber, setPageNumber] = useState(1);

	return (
		<Wrapper>
			<div className="w-full bg-[#f0f0f0] h-screen">
				<div className="w-[90%] mx-auto h-full ">
					<h1 className="text-eccblue text-[32px] my-6 ">Manage Users</h1>
					{/* <UserTable /> */}
					{userData.length !== 0 && (
						<>
							<div className="bg-white rounded-[15px]">
								<div className="w-full h-[100px] flex flext-col items-center justify-between px-4">
									<div>
										<SearchBar />
									</div>
									<button className="h-[50px] bg-eccblue rounded-md text-white w-auto px-2">Add user</button>
								</div>
								<table className="w-full table-auto  ">
									<thead className="border-y border-y-[#e4e4ef]  border-solid">
										<tr>
											<th>
												<button className="w-[24px] ml-4 my-4 h-[24px] border border-solid border-[#e4e4e7]"></button>
											</th>
											<th>User</th>
											<th>Date Registered</th>
											<th>Phone Number</th>
											<th>Status</th>
											<th></th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{userData.slice(maxNumber * (pageNumber - 1), maxNumber * pageNumber).map((user, index) => (
											<tr
												key={index}
												className="  border-y border-y-[#e4e4ef] bg-white"
											>
												<td>
													<button className="w-[24px] ml-4 h-[24px] border border-solid border-[#e4e4e7]"></button>
												</td>
												<td className="flex flex-row">
													<img
														className="ml-4"
														src={user.profilePic}
														alt=""
													/>
													<span className=" ml-4 flex flex-col">
														<p className="font-semibold">{user.userName}</p>
														<p>{user.userEmail}</p>
													</span>
												</td>

												<td>{user.registrationDate}</td>
												<td>{user.userPhone}</td>
												<td>
													<div className={` mr-4 w-auto p-1 flex items-center justify-center rounded-lg ${user.status == "Verified" ? " text-success bg-[#ebf6eb]" : "text-[#f93232] bg-[#fff0f0]"} `}>{user.status}</div>
												</td>

												<td>
													<img
														className="mr-4"
														src="../icons/admin-icons/highlight.svg"
														alt=""
													/>
												</td>
												<td>
													<img
														src="../icons/admin-icons/delete.svg"
														alt=""
													/>
												</td>
											</tr>
										))}
									</tbody>
								</table>
								<div className="bg-white rounded-b-[15px] px-4 justify-between flex flex-row items-center ">
									<div className="mb-6">
										<PaginationSection
											pageSize={false}
											searchResults={userData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(userData.length / maxNumber)}
										/>
									</div>

									<div>
										<p>{`Showing ${(pageNumber - 1) * maxNumber + 1} to ${(pageNumber - 1) * maxNumber + 1 + (maxNumber - 1) > userData.length ? userData.length : (pageNumber - 1) * maxNumber + 1 + (maxNumber - 1)} of ${userData.length}`}</p>
									</div>

									<div className=" flex flex-row items-center">
										<div>
											<p>Rows per page</p>
										</div>
										<div>
											<input
												className="w-[30px] focus:outline-none border border-solid border-black ml-4"
												type="number"
												value={maxNumber}
												onChange={(e) => setMaxNumber(parseInt(e.target.value))}
											/>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default Manage;
