interface UserInfoProps {
	userData: any;
}

const UserPersonalInfo: React.FC<UserInfoProps> = ({ userData }) => {
	return (
		<div className="w-full py-4 px-[80px] h-auto">
			<div className="w-full flex flex-row justify-between items-center">
				<div>
					<img
						className="w-[100px] h-[100px] rounded-full"
						src={userData.profilePic}
						alt=""
					/>
				</div>
				<div>
					<p>{`Date Registered: ${userData.registrationDate}`}</p>
					<p>{`Status: ${userData.status}`}</p>
				</div>
			</div>

			<div className="w-full flex flex-col gap-y-[70px]">
				<div className="flex w-full mx-auto flex-row justify-between items-center">
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">Name:</p>
						<p>{userData.userName}</p>
					</div>
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">Email Address:</p>
						<p>{userData.userEmail}</p>
					</div>
				</div>

				<div className="flex w-full mx-auto flex-row justify-between items-center">
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">Address:</p>
						<p>{userData.userAddress}</p>
					</div>
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">State:</p>
						<p>{userData.state}</p>
					</div>
				</div>

				<div className="flex w-full mx-auto flex-row justify-between items-center">
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">Phone Number:</p>
						<p>{userData.userPhone}</p>
					</div>
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">L.G.A:</p>
						<p>{userData.lga}</p>
					</div>
				</div>
				<div className="flex w-full mx-auto flex-row justify-start items-center">
					<div className="flex flex-col">
						<p className="w-[322px] border-b border-b-[#c5c5c5] ">NIN:</p>
						<p>{userData.nin}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPersonalInfo;
