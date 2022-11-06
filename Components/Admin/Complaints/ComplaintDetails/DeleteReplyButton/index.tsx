interface ButtonProps {
	onClickReply: any;
	onClickDelete: any;
	clearButtonIcon: string;
	clearButtonText: string;
	filledButtonText: string;
	filledButtonTextIcon: string;
	clearButtonBgColour: string;
	clearButtonTextColour: string;
	clearBorderColour: string;
}

const DeleteReplyButton: React.FC<ButtonProps> = ({ clearBorderColour, clearButtonTextColour, onClickDelete, clearButtonBgColour, onClickReply, clearButtonIcon, clearButtonText, filledButtonText, filledButtonTextIcon }) => {
	return (
		<div className="flex flex-row gap-x-6">
			<div>
				<button
					onClick={onClickDelete}
					className={`flex border ${clearBorderColour} flex-row items-center justify-center gap-x-4 w-[183px] h-[54px] rounded-md ${clearButtonBgColour} ${clearButtonTextColour}  `}
				>
					<img
						src={clearButtonIcon}
						alt=""
					/>
					<p className=" font-semibold text-[13px] ">{clearButtonText}</p>
				</button>
				<button></button>
			</div>
			<div>
				<button
					onClick={onClickReply}
					className="flex flex-row items-center justify-center gap-x-4 w-[183px] h-[54px] rounded-md bg-eccblue "
				>
					<img
						src={filledButtonTextIcon}
						alt=""
					/>
					<p className=" font-semibold text-[13px] text-white">{filledButtonText}</p>
				</button>
				<button></button>
			</div>
		</div>
	);
};

export default DeleteReplyButton;
