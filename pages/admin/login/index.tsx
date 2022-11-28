import { LoginInputGroup } from "../../../Components";
import { useState } from "react";
import { AsyncSubmitButton } from "../../../Components";
import Joi from "joi-browser";
const AdminLogin = () => {
	const [email, setEmail] = useState("");
	const [OTPSent, setOTPSent] = useState(false);
	const [OTP, setOTP] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});
	const [otpLoading, setOTPLoading] = useState(false);

	const schema = Joi.object({
		email: Joi.string()
			.required()
			.min(3)
			.max(100)
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.label("Email"),

		password: Joi.string().min(3).max(18).required().label("Password"),
	});

	const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		const { error } = schema.validate({ email, password }, { abortEarly: false });
		const errorObject = { ...errors };
		if (error) {
			errorObject.email = error.details.find((error: any) => error.path[0] == "email") ? error.details.find((error: any) => error.path[0] == "email").message : "";
			errorObject.password = error.details.find((error: any) => error.path[0] == "password") ? error.details.find((error: any) => error.path[0] == "password").message : "";
			setErrors(errorObject);
		} else {
			setErrors({ email: "", password: "" });

			try {
				setLoading(true);
				//integration code
				setOTPSent(true);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const onOtpSubmit = (e: React.MouseEvent<HTMLElement>) => {
		try {
			setOTPLoading(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<div className="w-full h-[50%] p-4 bg-eccblue flex items-start justify-start ">
				<div className=" flex flex-row gap-x-2">
					<img
						className="w-[80px] h-[28px] "
						src="../Images/whiteEccLogo.svg"
						alt=""
					/>
					<p className="text-white text-[14px]">ADMIN</p>
				</div>
			</div>
			{!OTPSent ? (
				<div className="fixed justify-self-center bg-white w-[60%] shadow-2xl h-fit py-6 rounded-md flex flex-col items-center  ">
					<h1 className="text-eccblue text-[28px]  text-center mb-6">Admin Login</h1>

					<div className="w-[90%] space-y-4">
						<LoginInputGroup
							type="email"
							label="Email"
							value={email}
							placeholder={"Enter email address"}
							setValue={setEmail}
							errorMessage={errors.email}
						/>
						<LoginInputGroup
							type="password"
							label="Password"
							value={password}
							placeholder={"Enter password"}
							setValue={setPassword}
							errorMessage={errors.password}
						/>

						<AsyncSubmitButton
							onSubmit={onSubmit}
							text={"Login"}
							loading={loading}
						/>
					</div>
				</div>
			) : (
				<div className="fixed justify-self-center bg-white w-[60%] shadow-2xl h-fit py-6 rounded-md flex flex-col items-center  ">
					<h1 className="text-eccblue text-[28px]  text-center mb-6">Enter OTP Code</h1>

					<div className="w-[90%] space-y-4">
						<p>A 6-digit OTP code has been sent to your email. Kindly use it to proceed. </p>
						<LoginInputGroup
							type="password"
							label="Enter OTP Code"
							value={OTP}
							placeholder={"Enter OTP Code"}
							setValue={setOTP}
							errorMessage={undefined}
						/>

						<AsyncSubmitButton
							onSubmit={onOtpSubmit}
							text={"Login"}
							loading={otpLoading}
						/>
					</div>
				</div>
			)}
			<div className="w-full h-[50%] bg-clearblue"></div>
		</div>
	);
};

export default AdminLogin;
