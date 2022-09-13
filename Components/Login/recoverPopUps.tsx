interface PopupProps {
	error: boolean;
	resend: boolean;
	exit: any;
}

const Popup: React.FC<PopupProps> = ({ error, resend, exit }) => {
	return (
		<>
			{error && !resend && (
				<div className=" lg:w-full p-0 lg:h-[72px] rounded-[8px] box-border border border-solid flex flex-col border-[#ef2e2e] justify-center items-center lg:bg-white w-[350px] h-[50px] mx-auto my-8  bg-[#f1f7fe] ">
					<div className="flex flex-row items-center p-0 gap-5   h-[34]">
						<div className="text-[#ef2e2e]">X</div>
						<div>You have entered a wrong code</div>
					</div>
				</div>
			)}
			{resend && !error && (
				<div className=" lg:w-full p-0 lg:h-[72px] rounded-[8px] box-border border border-solid flex flex-col border-[#2f972f] justify-center items-center lg:bg-white w-[350px] h-[50px] mx-auto my-8  bg-[#f1f7fe] ">
					<div className="flex flex-row items-center p-0 gap-5   h-[34]">
						<div className="text-[#2f972f]">
							<img
								src="./images/icon.png"
								alt="check"
							/>
						</div>
						<div>A new code has been sent to your email</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Popup;
