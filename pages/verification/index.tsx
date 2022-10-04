import type { NextPage } from "next";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Footer, NavBar } from "../../Components";

import { AnimatePresence, motion } from "framer-motion";
import { states } from "./StatesAndLga";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { validateVerifyInputs } from "../../Components/Verification/FormValidation";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Testimonials from "../../Sections/HomeSections/TestimonialsSection";
import VerificationInputGroup from "../../Components/Verification/VerificationInputGroup";

const VerificationPage: NextPage = () => {
	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dob, setDob] = useState("");
	const [state, setState] = useState("");
	const [lga, setLga] = useState("");
	const [address, setAddress] = useState("");
	const [photoId, setPhotoId] = useState({ url: "", cloudinaryId: "" });
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const inputContainerRef = useRef<null | HTMLInputElement>(null);
	const photoIdScrollRef = useRef<null | HTMLDivElement>(null);
	const [progress, setProgress] = useState(0);
	const [errors, setErrors] = useState({
		firstName: "", 
		lastName: "",
		phoneNumber: "",
		dob: "",
		state: "",
		lga: "",
		address: "",
		photoIdUrl: "",
	});
	const filePickerRef = useRef<null | HTMLInputElement>(null);
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const router = useRouter();
	const addDocument = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0].size / 1048576 < 0.3) {
			setProgress(0);
			setSelectedFile(e.target.files[0]);
			console.log(e.target.files[0].size);
			let formData = new FormData();
			formData.append("image", e.target.files[0]);
			const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/image`;
			const options = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: (progressEvent: any) => {
					const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					setProgress(progress);
				},
			};
			try {
				const result: any = await axios.post(url, formData, options);
				setPhotoId({
					url: result.data.secure_url,
					cloudinaryId: result.data.public_id,
				});
				console.log(result);

				console.log(photoId);
			} catch (error) {
				console.log(error);
				alert("Could not upload File");
			}
		} else {
			alert("File size cannot be over 300kb");
		}
	};
	const removeDocument = async () => {
		setSelectedFile(null);
		setProgress(0);
		const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/image/delete`;
		const payload = { public_id: photoId.cloudinaryId };
		try {
			const result = await axios.post(url, payload);
			console.log(result);
			setPhotoId({ url: "", cloudinaryId: "" });
		} catch (err) {
			console.log(err);
		}
	};
	const onSubmit = async () => {
		const { error } = validateVerifyInputs({
			firstName,
			lastName,
			phoneNumber,
			dob,
			state,
			lga,
			address,
			photoIdUrl: photoId.url,
		});

		if (error) {
			const { details } = error;
			const errors = {
				firstName: details.find((item: any) => item.path[0] == "firstName") ? details.find((item: any) => item.path[0] == "firstName").message : "",
				lastName: details.find((item: any) => item.path[0] == "lastName") ? details.find((item: any) => item.path[0] == "lastName").message : "",
				phoneNumber: details.find((item: any) => item.path[0] == "phoneNumber") ? details.find((item: any) => item.path[0] == "phoneNumber").message : "",
				dob: details.find((item: any) => item.path[0] == "dob") ? details.find((item: any) => item.path[0] == "dob").message : "",
				state: details.find((item: any) => item.path[0] == "state") ? details.find((item: any) => item.path[0] == "state").message : "",
				lga: details.find((item: any) => item.path[0] == "lga") ? details.find((item: any) => item.path[0] == "lga").message : "",
				address: details.find((item: any) => item.path[0] == "address") ? details.find((item: any) => item.path[0] == "address").message : "",
				photoIdUrl: details.find((item: any) => item.path[0] == "photoIdUrl") ? details.find((item: any) => item.path[0] == "photoIdUrl").message : "",
			};
			let firstError = details[0].path[0];
			console.log(firstError);
			if (firstError != "photoIdUrl") {
				console.log(firstError)
				inputContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
			} 
			setErrors(errors);
		}
		if (!error) {
			setErrors({
				firstName: "", 
				lastName: "",
				phoneNumber: "",
				dob: "",
				state: "",
				lga: "",
				address: "",
				photoIdUrl: "",
			});
			const payload = { dob, phoneNumber, address, lga, state, photoId };
			const url = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/users/verify/${cookies.user._id}`;
			try {
				const result = await axios.post(url, payload);
				const { token } = result.data;
				const user = jwt_decode(token);
				console.log(token, user);
				setCookie("user", user);
				router.push("/dashboard");
			} catch (err: any) {
				if (err.response.data.message) {
					alert(err.response.data.message);
				} else {
					alert("Something went wrong on the server");
				}
			}
		}
	};
	return (
		<>
			<NavBar />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className="mt-[198px]"
			>
				<div className="">
					<p className="text-center text-[18px] lg:text-[40px] font-[500]">You will have to verify yourself before you continue </p>
					<p className="text-center text-[20px] font-[300] mt-[30px]">
						Already have an account?{" "}
						<a
							className="text-[#0B63C5] cursor-pointer"
							href="/login"
						>
							Login
						</a>
					</p>
				</div>
				<div className="mt-[99px] mx-[12.5px] lg:mx-[109px]">
					<div className="flex lg:grid flex-col lg:grid-cols-2 gap-x-[65px] space-y-[30px] lg:space-y-0 lg:gap-y-[52px]">
						<VerificationInputGroup
							label="First Name"
							placeholder="Last Name"
							value={firstName}
							setValue={setFirstName}
							maxlength={11}
							type="text"
							errorMessage={errors.firstName}
						/>
						<VerificationInputGroup
							label="Last Name"
							placeholder="Last Name"
							value={lastName}
							setValue={setLastName}
							type="text"
							max={`${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}`}
							errorMessage={errors.lastName}
						/>
						<VerificationInputGroup
							label="Phone Number"
							placeholder="Enter Phone Number"
							value={phoneNumber}
							setValue={setPhoneNumber}
							maxlength={11}
							type="number"
							errorMessage={errors.phoneNumber}
						/>
						<VerificationInputGroup
							label="Date Of Birth"
							placeholder="DD/MM/YYYY"
							value={dob}
							setValue={setDob}
							type="date"
							max={`${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}`}
							errorMessage={errors.dob}
						/>
						<div className="flex flex-col">
							<p className="text-[14px] lg:text-[20px]">State</p>
							<select
								value={state}
								onChange={(e) => setState(e.target.value)}
								style={{ color: state ? "black" : "#9ca3af" }}
								className="transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[25px] px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-[#0B63C5] text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px]"
							>
								<option
									value=""
									selected
								>
									Enter your Residential State
								</option>
								{states.map((state) => (
									<option
										className="text-black"
										value={state.name}
									>
										{state.name}
									</option>
								))}
							</select>
							{errors.state && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="text-[13px] md:text-[15px] lg:text-[18px] mt-[5px] text-red-500 font-medium"
								>
									{errors.state}
								</motion.p>
							)}
						</div>
						<div className="flex flex-col">
							<p className="text-[14px] lg:text-[20px]">L.G.A</p>
							<select
								value={lga}
								onChange={(e) => setLga(e.target.value)}
								style={{
									color: state && lga ? "black" : "#9ca3af",
								}}
								className="transition-[150ms] py-[12.5px] lg:py-[20px] xl:py-[25px] px-[20px] focus:outline-none rounded-[10px] border-2 border-[#C5C5C5] mt-[10px] w-full focus:border-[#0B63C5] text-[14px] lg:text-[16px] placeholder:text-[14px] lg:placeholder:text-[16px]"
							>
								<option
									value=""
									selected
								>
									Enter your Local Government Area
								</option>
								{states
									.find((item) => item.name == state)
									?.lgas.map((state) => (
										<option
											className="text-black"
											value={state}
										>
											{state}
										</option>
									))}
							</select>
							{errors.lga && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="text-[13px] md:text-[15px] lg:text-[18px] mt-[5px] text-red-500 font-medium"
								>
									{errors.lga}
								</motion.p>
							)}
						</div>

						<VerificationInputGroup
							label="Adress Line"
							placeholder="Enter Valid Address"
							value={address}
							setValue={setAddress}
							type="text"
							className="col-span-2"
							errorMessage={errors.address}
						/>
					</div>
					<div className="mt-[30px] lg:mt-[66px]">
						<div>
							<p className="text-[20px]">Upload Document</p>
						</div>
						<div className="bg-[#F1F7FE]">
							<div className="w-full py-[27.5px] lg:py-[122px] rounded-[12px] border-[#0B63C5] mt-[25px] border lg:border-2 border-dashed flex flex-col items-center justify-center">
								<div className={`w-full mx-auto`}>
									<img
										src="icons/paste.svg"
										alt=""
										className="mx-auto cursor-pointer w-[41px] lg:w-[137px] h-[41px] lg:h-[137px]"
										onClick={() => filePickerRef.current?.click()}
									/>
									<input
										type="file"
										ref={filePickerRef}
										hidden
										accept=".jpg, .jpeg, .png, .pdf"
										onChange={addDocument}
										id="inputfile"
									/>
									<div className="text-center mt-[16px]">
										<p className="text-[14px] lg:text-[20px] font-[400]">
											Click to upload your{" "}
											<span
												className="text-[#0B63C5] cursor-pointer"
												onClick={() => filePickerRef.current?.click()}
											>
												document
											</span>{" "}
											here
										</p>
										<p className="text-[12px] lg:text-[18px] mt-[6px] lg:mt-[22px]">Supported format: JPEG, PNG, PDF</p>
									</div>

									<AnimatePresence>
										{selectedFile && (
											<motion.div
												initial={{
													opacity: 0,
													scale: 0.6,
												}}
												animate={{
													opacity: 1,
													scale: 1,
												}}
												exit={{
													opacity: 0,
													scale: 1,
												}}
												className="bg-[#0B63C5] h-[101px] w-[708px] mx-auto mt-[43px] rounded-[12px]"
											>
												<div className="ml-[33px] mr-[50px]">
													<div className="pt-[27px] relative">
														<div className="flex flex-row space-x-[37px]">
															<img
																src="icons/file-check.svg"
																alt=""
															/>
															<p className="text-[20px] font-[600] text-white">{selectedFile.name}</p>
														</div>
														<img
															src="icons/close-1.svg"
															className=" absolute right-0 top-[27px] w-[18px] h-[18px] mt-[5px] cursor-pointer"
															onClick={removeDocument}
															alt=""
														/>
													</div>
													{/* <hr className="mt-[12.12px] border-[3.5px] rounded-full"/> */}
													<div className="w-full mt-[12.12px] bg-[#C5C5C5] h-[5px] rounded-full">
														<div
															className="bg-white h-[5px] rounded-full transition-[50000ms]"
															style={{
																width: progress ? `${progress}%` : `0%`,
															}}
														></div>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						</div>
						{errors.photoIdUrl && (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-[13px] md:text-[15px] lg:text-[18px] mt-[5px] text-red-500 font-medium"
							>
								{errors.photoIdUrl}
							</motion.p>
						)}
					</div>
				</div>
				<div className="hidden lg:block mx-[120px] mt-[63px]">
					<p className="text-[20px] font-[500] leading-[30px]">You can use any of these means of identification</p>
					<ul className="text-[20px] text-[#0B63C5] font-[600] space-y-[11px] mt-[30px] -ml-[10px]">
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>Voter's Card</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>International Passport</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>National ID card</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>National Identification Slip (NIN)</p>
						</li>
						<li className="flex flex-row space-x-[37px]">
							{" "}
							<img
								src="icons/check.svg"
								alt=""
							/>{" "}
							<p>Driver’s Licence</p>
						</li>
					</ul>
				</div>
				<div className="mx-[12.5px] lg:hidden leading-[24px] mt-[22px] font-[500] text-[12px]">
					<p>You can use any of these means of identification:</p>
					<p className="text-[#0B63C5]">Voter’s Card, International passport, National ID card, Driver’s licence and National identification slip (NIN) </p>
				</div>
				<div
					onClick={onSubmit}
					className="my-[63px] mx-[12.5px] lg:mx-auto rounded-[12px] bg-[#0B63C5] lg:w-[587px] transition-[150ms] active:scale-95 "
				>
					<p className="text-center text-white text-[20px] font-[600] flex items-center justify-center py-[14.5px] cursor-pointer">Continue</p>
				</div>
				<div className="mt-[118px]">
					<Testimonials />
				</div>
				<Footer />
			</motion.div>
		</>
	);
};

export default VerificationPage;
