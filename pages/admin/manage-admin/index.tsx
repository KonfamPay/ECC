import Wrapper from "../../../Components/Admin/Navs/navWrapper";
import { useState, useEffect } from 'react';
import AdminData from'../../../Components/Admin/adminData'
import { Admin } from './../../../types/complaintTypes.d';
import SearchBar from "Components/Admin/searchbar";
import PaginationSection from "Components/LatestScams/PaginationSection";
import AdminTable from "Components/Admin/ManageAdmin/AdminTable";
import AdminOperation from './../../../Components/Admin/ManageAdmin/AdminOperations/index';


const ManageAdmin = () => {
    const [adminData, setAdminData] = useState<Admin[]>(AdminData);
	const [maxNumber, setMaxNumber] = useState(8);
	const [pageNumber, setPageNumber] = useState(1);
	const [isShowing, setShowing] = useState(false);
	const [action, setAction] = useState("add");
	const [value, setValue] = useState("");
    const [adminId,setAdminId]= useState('')
	const [selected, setSelected] = useState<string[]>([]);
	const onSelect = (id: string) => {
		let selectedItems: Array<string> = [];
		//check if the item is already in the selected list if it is remove it from the list if not add it to the list
		if (selected.includes(id)) {
			const removedItems = selected.filter((item) => item !== id);
			selectedItems = removedItems;
		} else {
			selectedItems = [...selected, id];
		}
		setSelected(selectedItems);
	};
	useEffect(() => {
		function filterBySearch() {
			const filteredData = adminData.filter((admin) => admin.email.includes(value)||admin.username.includes(value));
			if (filteredData.length > 0) {
				setAdminData(filteredData);
			} else setAdminData(AdminData);
			if (value.length === 0) {
				setAdminData(AdminData);
			}
			setPageNumber(1);
		}

		filterBySearch();
	}, [value]);

    const addAdmin=(adminObject:{ username:string
        email:string})=>{
            console.log('hello')

    }

    const deleteAdmin=(adminId: string)=>{
    console.log('hello')
    }
	return (
		<Wrapper>
			<div>
				{isShowing && (
					<div className="w-full bg-transparent flex flex-col items-center h-screen">
						<AdminOperation
							setOperation={setShowing}
							operationType={action}
                            adminId={adminId}
                            addUser={addAdmin}
                            deleteUser={deleteAdmin}
						/>
					</div>
				)}
				{adminData.length > 0 && (
					<>
						<div className="bg-white rounded-[15px]">
							<div className="w-full h-[100px] flex flext-col items-center justify-between px-4">
								<div>
									<SearchBar
										value={value}
										setValue={setValue}
									/>
								</div>
								<button
									disabled={isShowing}
									onClick={() => {
										setShowing(true);
										setAction("add");
									}}
									className={`h-[50px] ${false ? "bg-[#838181]" : "bg-eccblue"}  flex flex-row items-center gap-x-4 rounded-md text-white w-auto px-2`}
								>
									<img
										src="../icons/admin-icons/userPlus.svg"
										alt=""
									/>
									Add Scam
								</button>
							</div>
							<AdminTable
                               setShowing={setShowing}
                               setAction={setAction}
                               setAdminId={setAdminId}
								selected={selected}
								setSelect={onSelect}
								AdminData={adminData}
								maxNumber={maxNumber}
								pageNumber={pageNumber}
							/>
							<div className="bg-white rounded-b-[15px] px-4 justify-between flex flex-row items-center ">
								{maxNumber <= 5 ? (
									<div className="mb-6">
										<PaginationSection
											pageSize={true}
											searchResults={adminData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(adminData.length / maxNumber)}
										/>
									</div>
								) : (
									<div className="mb-6">
										<PaginationSection
											pageSize={false}
											searchResults={adminData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(adminData.length / maxNumber)}
										/>
									</div>
								)}

								<div>
									<p>{`Showing ${(pageNumber - 1) * maxNumber + 1} to ${(pageNumber - 1) * maxNumber + 1 + (maxNumber - 1) > adminData.length ? adminData.length : (pageNumber - 1) * maxNumber + 1 + (maxNumber - 1)} of ${adminData.length}`}</p>
								</div>

								<div className=" flex flex-row items-center">
									<div>
										<p>Rows per page</p>
									</div>
									<div>
										<input
											className="w-[30px] focus:outline-none border border-solid border-black ml-4"
											type="number"
											max={9}
											min={1}
											value={maxNumber}
											onChange={(e) =>parseInt(e.currentTarget.value)>0?setMaxNumber(parseInt(e.target.value)):setMaxNumber(8)}
										/>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</Wrapper>
	);
};

export default ManageAdmin;