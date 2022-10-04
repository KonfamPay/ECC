import { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";

interface PopupProps {
	error: boolean;
	resend: boolean;
	exit: any;
}

interface ErrorPopUpProps {
	error: string;
	setBackendError: Dispatch<SetStateAction<string>>;
}

interface ResendSuccessfulPopUp {
	resendText: string;
	setResendText: Dispatch<SetStateAction<string>>;
}

export const ErrorPopUp: React.FC<ErrorPopUpProps> = ({ error, setBackendError }) => {
	useEffect(() => {
		setTimeout(() => setBackendError(""), 1000);
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			layout
			className=" lg:w-full p-0 lg:h-[72px] rounded-[8px] box-border border border-solid flex flex-col border-[#ef2e2e] justify-center items-center lg:bg-white w-[350px] h-[50px] mx-auto my-8  bg-[#f1f7fe] "
		>
			<div className="flex flex-row items-center p-0 gap-5   h-[34]">
				<img src="/icons/incorrect.svg" />
				<div className="text-[20px]">{error}</div>
			</div>
		</motion.div>
	);
};

export const ResendCodeSuccessfulPopUp: React.FC<ResendSuccessfulPopUp> = ({ resendText, setResendText }) => {
	useEffect(() => {
		setTimeout(() => setResendText(""), 1000);
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0 }}
			className=" lg:w-full p-0 lg:h-[72px] rounded-[8px] box-border border border-solid flex flex-col border-[#2f972f] justify-center items-center lg:bg-white w-[350px] h-[50px] mx-auto my-8  bg-[#f1f7fe] "
		>
			<div className="flex flex-row items-center p-0 gap-5   h-[34]">
				<div className="text-[#2f972f]">
					<img
						src="./images/icon.png"
						alt="check"
					/>
				</div>
				<div>{resendText}</div>
			</div>
		</motion.div>
	);
};

const Popup: React.FC<PopupProps> = ({ error, resend, exit }) => {
	return (
		<>
			{error && !resend && (
				<div className=" lg:w-full p-0 lg:h-[72px] rounded-[8px] box-border border border-solid flex flex-col border-[#ef2e2e] justify-center items-center lg:bg-white w-[350px] h-[50px] mx-auto my-8  bg-[#f1f7fe] ">
					<div className="flex flex-row items-center p-0 gap-5   h-[34]">
						<img src="/icons/incorrect.svg" />
						<div className="text-[20px]">{error}</div>
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
