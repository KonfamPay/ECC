interface ReplyProps {
	reply: string;
	setReply: any;
	setReplyShowing: any;
}

const ReplyComponent: React.FC<ReplyProps> = ({ setReplyShowing, reply, setReply }) => {
	return (
		<div className="w-full p-4">
			<div className="w-full pb-4 flex flex-row items-center  justify-between">
				<textarea
					value={reply}
					onChange={(e) => {
						setReply(e.currentTarget.value);
					}}
					className="w-[70%] h-[150px] bg-[#F0F0F0] resize-none focus:outline-none p-4 rounded-md "
					placeholder="reply complaint"
				></textarea>

				<button
					onClick={() => setReplyShowing(false)}
					className="cursor-pointer text-[18px] font-medium text-[#838181]"
				>
					Cancel
				</button>
				<button className="cursor-pointer bg-eccblue text-white flex flex-row items-center rounded-md w-[100px] h-[40px] font-medium text-[18px] justify-center gap-x-2 ">
					<p>Send</p>
					<img
						src="../../../icons/admin-icons/sendIcon.svg"
						alt=""
					/>
				</button>
			</div>
			<button className="flex flex-row gap-x-4  border border-solid border-eccblue rounded-md text-eccblue w-[30%] h-[69px] items-center justify-center ">
				<div className="bg-eccblue rounded-full w-[28px] h-[28px] text-[18px] text-white">+</div>
				<p> Add supporting documents </p>
			</button>
		</div>
	);
};

export default ReplyComponent;
