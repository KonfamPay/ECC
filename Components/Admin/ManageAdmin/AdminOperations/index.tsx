import * as React from "react";
import { useState } from "react";
import OperationsInput from "../../ManageUsers/UserOperations/OperationsInputGroup/index";
import { Dispatch, SetStateAction } from "react";

interface OperationProps {
	operationType: string;
	adminId: string;

	setOperation: Dispatch<SetStateAction<boolean>>;

	addUser: (admin: { username: string; email: string }) => void;

	deleteUser: (id: string) => void;
}

const AdminOperation: React.FC<OperationProps> = ({ deleteUser, addUser, operationType, setOperation, adminId }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");

	const admin = { username: username, email: email };

	return (
		<div className="w-[40%] h-fit z-10 rounded-[15px] shadow-2xl py-4   bg-white fixed border border-solid  ">
			<div className="w-[90%] mx-auto flex justify-end">
				<button
					onClick={() => {
						setOperation(false);
					}}
					className="text-white bg-eccblue w-[24px] h-[24px]  rounded-full"
				>
					X
				</button>
			</div>

			{operationType == "delete" ? (
				<div className="w-full">
					<h1 className="text-center text-eccblue text-[18px] font-medium mb-4">Delete User</h1>

					<p className="w-[90%] mx-auto text-medium text-[18px]">Are you sure you want to delete this user permanently from the database?</p>

					<div className="w-[90%] flex justify-end mt-4 mx-auto">
						<button
							onClick={() => {
								deleteUser(adminId);
								setOperation(false);
							}}
							className="w-[100px] h-[50px] rounded-md bg-eccblue text-white"
						>
							Delete
						</button>
						<button
							onClick={() => {
								setOperation(false);
							}}
							className="text-[#838181] ml-4 font-medium"
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<div className="w-full">
					{operationType == "add" && <h1 className="text-center text-eccblue text-[18px] font-medium mb-4">Add a new Admin</h1>}

					<OperationsInput
						label="Full Name:"
						value={username}
						setValue={setUsername}
						errors={""}
					/>
					<OperationsInput
						label="Email Address:"
						value={email}
						setValue={setEmail}
						errors={""}
					/>

					<div className="w-[90%] flex justify-end mt-4 mx-auto">
						{operationType == "add" && (
							<button
								onClick={() => {
									addUser(admin);
									setOperation(false);
								}}
								className="w-[100px] h-[50px] rounded-md bg-eccblue text-white"
							>
								Add Admin
							</button>
						)}

						<button
							onClick={() => {
								setOperation(false);
							}}
							className="text-[#838181] ml-4 font-medium"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
export default AdminOperation;
