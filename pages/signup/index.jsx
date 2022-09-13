import Link from "next/link";
import { useState } from "react";
import { LoginInputGroup } from "../../Components/";
import Joi from "joi-browser";
import { motion } from "framer-motion";
import { AsyncSubmitButton } from "../../Components/";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const SignupPage = () => {
	const [cookies, setCookie] = useCookies(["token"]);
	const router = useRouter();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [backendError, setBackendError] = useState("");
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(true);
	const passwordsMatch = (password, confirmPassword) => {
		return password == confirmPassword;
	};
	const schema = Joi.object({
		firstName: Joi.string().min(3).max(46).required().label("First Name"),
		lastName: Joi.string().min(3).max(46).required().label("Last Name"),
		email: Joi.string()
			.min(3)
			.max(100)
			.email({ minDomainSegments: 2, tlds: { allow: false } })
			.label("Email"),
		password: Joi.string().min(8).max(40).required().label("Password"),
		confirmPassword: Joi.string().min(8).max(40).required().label("Confirm Password"),
	});
	const onSubmit = async (e) => {
		e.preventDefault();
		const { error } = schema.validate({ firstName, lastName, email, password, confirmPassword }, { abortEarly: false });
		if (error) {
			const { details } = error;
			const errors = {
				firstName: details.find((item) => item.path[0] == "firstName") ? details.find((item) => item.path[0] == "firstName").message : "",
				lastName: details.find((item) => item.path[0] == "lastName") ? details.find((item) => item.path[0] == "lastName").message : "",
				email: details.find((item) => item.path[0] == "email") ? details.find((item) => item.path[0] == "email").message : "",
				password: details.find((item) => item.path[0] == "password") ? details.find((item) => item.path[0] == "password").message : "",
				confirmPassword: details.find((item) => item.path[0] == "confirmPassword") ? details.find((item) => item.path[0] == "confirmPassword").message : "",
			};
			if (!passwordsMatch(password, confirmPassword) && confirmPassword != "") errors.confirmPassword = "Confirm Password should be the same as Password";
			console.log(passwordsMatch(password, confirmPassword));
			setErrors(errors);
		} else {
			setErrors({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
			try {
				setLoading(true);
				const payload = { firstName, lastName, email, password };
				const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/users`, payload);
				setBackendError("");
				setCookie("token", res.data.token, {
					path: "/",
				});
				router.push("/dashboard");
				console.log(res);
			} catch (err) {
				console.log(err);
				try {
					if (err.response.data.message) setBackendError(err.response.data.message);
				} catch (err) {
					alert("Something went wrong.");
				}
			} finally {
				setLoading(false);
			}
		}
	};
	return (
		<>
			<div className="w-screen h-screen poppinsFont lg:grid grid-cols-[47%_53%] overflow-hidden hidden ">
				<div className="relative h-screen w-full bg-gradient-to-br from-eccblue to-[#073D79]">
					<img
						className="absolute bottom-0 z-10 w-[208.8px] xl:w-[261px]"
						src="/Images/triangle.svg"
					/>
					<img
						className="absolute bottom-0 ml-[100px] w-[300px] xl:w-[374px]"
						src="/Images/triangle2.svg"
					/>
					<img
						className="w-[98px] ml-[50px] pt-[55px]"
						src="./Images/whiteEccLogo.svg"
					/>
					<motion.img
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						className="absolute w-full pt-[55px] bottom-[100px] xl:bottom-[60px] ml-[58px] max-w-[390px] xl:max-w-[500px] "
						src="./Images/avatars.png"
					/>
					<div className="ml-[50px] mt-[120px] text-white">
						<p className="text-[40px] xl:text-[40px] font-bold">Join the Fight!</p>
						<p className="text-[17px] pr-[35px] xl:text-[17px] font-semibold max-w-[460px] mt-[15px]">Join others to help us eliminate online fraud by reporting a scam</p>
					</div>
				</div>
				<div className="w-full px-[90px] flex flex-col overflow-y-auto py-[73px]">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						exit={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<p className="text-[36px] xl:text-[40px] text-center">Create your account</p>
						<p className="text-center mt-[20px] mb-[38px]">
							Already have an account?{" "}
							<Link href="/login">
								<span className="text-eccblue cursor-pointer">Login</span>
							</Link>
						</p>
						<form>
							<div className="flex flex-col gap-y-[35px]">
								<LoginInputGroup
									label="First Name"
									placeholder="Enter Legal First Name"
									value={firstName}
									setValue={setFirstName}
									type="text"
									errorMessage={errors.firstName}
								/>
								<LoginInputGroup
									label="Last Name"
									placeholder="Enter Legal Last Name"
									value={lastName}
									setValue={setLastName}
									type="text"
									errorMessage={errors.lastName}
								/>
								<LoginInputGroup
									label="Email"
									placeholder="Enter Valid Email Address"
									value={email}
									setValue={setEmail}
									type="email"
									errorMessage={errors.email}
								/>
								<LoginInputGroup
									label="Password"
									placeholder="Enter Password"
									value={password}
									setValue={setPassword}
									type="password"
									errorMessage={errors.password}
								/>
								<LoginInputGroup
									label="Confirm Password"
									placeholder="Enter Password"
									value={confirmPassword}
									setValue={setConfirmPassword}
									type="password"
									errorMessage={errors.confirmPassword}
								/>
							</div>
							{backendError && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="text-center my-[20px] text-[#ed4956]"
								>
									{backendError}
								</motion.p>
							)}
							<div className="mt-[43px]">
								<AsyncSubmitButton
									onSubmit={onSubmit}
									text="Continue"
									loading={loading}
								/>
							</div>
						</form>
					</motion.div>
				</div>
			</div>
			{/* MOBILE VERSION */}
			<div className="lg:hidden bg-eccblue w-full min-h-screen poppinsFont pb-[70px] relative">
				<img
					className="w-[50px] ml-[15px] pt-[30px]"
					src="./Images/whiteEccLogo.svg"
				/>
				<div className="pl-[17px] w-full">
					<div className="w-full text-white max-w-[467px] mx-auto">
						<p className="text-[24px] font-bold mt-[27px] max-w-[500px] mx-auto">Join the Fight!</p>
						<p className="text-[14px] pr-[35px] xl:text-[17px] font-medium max-w-[460px] mt-[8px]">Join others to help us eliminate online fraud by reporting a scam</p>
					</div>
				</div>
				<div className="px-[9px] mt-[30px] max-w-[500px] mx-auto">
					<div className="w-full px-[14px] flex flex-col overflow-y-auto py-[22px] bg-white rounded-[20px]">
						<div>
							<p className="text-[18px] text-center font-semibold">Create your account</p>
							<p className="text-center mt-[2px] mb-[30px]">
								Already have an account?{" "}
								<Link href="/login">
									<span className="text-eccblue cursor-pointer">Login</span>
								</Link>
							</p>
							<form>
								<div className="flex flex-col gap-y-[15px]">
									<LoginInputGroup
										label="First Name"
										placeholder="Enter Legal First Name"
										value={firstName}
										setValue={setFirstName}
										type="text"
									/>
									<LoginInputGroup
										label="Last Name"
										placeholder="Enter Legal Last Name"
										value={lastName}
										setValue={setLastName}
										type="text"
									/>
									<LoginInputGroup
										label="Email"
										placeholder="Enter Valid Email Address"
										value={email}
										setValue={setEmail}
										type="email"
									/>
									<LoginInputGroup
										label="Password"
										placeholder="Enter Password"
										value={password}
										setValue={setPassword}
										type="password"
									/>
								</div>
								<button
									onClick={(e) => e.preventDefault()}
									className="w-full text-[14px] md:text-[20px] text-white py-[14px] md:py-[18px] xl:py-[22px] rounded-xl bg-eccblue mt-[30px]"
								>
									Continue
								</button>
							</form>
						</div>
					</div>
				</div>
				<img
					className="absolute bottom-0"
					src="/Images/polygons.svg"
				/>
			</div>
		</>
	);
};

export default SignupPage;
