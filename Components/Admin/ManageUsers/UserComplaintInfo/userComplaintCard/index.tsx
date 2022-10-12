interface ComplaintCardProps {
	backGround: string;
	textColor: string;
	icon: string;
	text: string;
	numberText: number;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({ backGround, text, numberText, icon, textColor }) => {
	return (
		<div className={` ${backGround} w-[200px] p-2 h-[109px] rounded-md items-center  flex flex-row`}>
			<div className="w-[30%] mr-4 ">
				<img
					src={icon}
					alt=""
				/>
			</div>
			<div className=" flex flex-col  w-[60%]">
				<p className={`${textColor} text-[22px]`}>{numberText}</p>
				<p className={` text-black text-[13px]`}>{text}</p>
			</div>
		</div>
	);
};

export default ComplaintCard;
