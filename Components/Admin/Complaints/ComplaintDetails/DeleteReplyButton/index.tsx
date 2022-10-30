interface ButtonProps {
	onClickReply: any;
	onClickDelete: any;
}

const DeleteReplyButton: React.FC<ButtonProps> = ({ onClickDelete, onClickReply }) => {
	return (
		<div className="flex flex-row gap-x-6">
			<div>
				<button
					onClick={onClickDelete}
					className="flex flex-row items-center justify-center gap-x-4 w-[183px] h-[54px] rounded-md bg-[#FFBDBD] "
				>
					<img
						src="../../../icons/admin-icons/trash.svg"
						alt=""
					/>
					<p className=" font-semibold text-[13px] text-[#ef2e2e]">Delete Complaint</p>
				</button>
				<button></button>
			</div>
			<div>
				<button
					onClick={onClickReply}
					className="flex flex-row items-center justify-center gap-x-4 w-[183px] h-[54px] rounded-md bg-eccblue "
				>
					<img
						src="../../../icons/admin-icons/undo.svg"
						alt=""
					/>
					<p className=" font-semibold text-[13px] text-white">Reply Complaint</p>
				</button>
				<button></button>
			</div>
		</div>
	);
};

export default DeleteReplyButton;
