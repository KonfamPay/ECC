import { useState, useEffect } from "react";
import { setDatasets } from "react-chartjs-2/dist/utils";
import MultiScamInput from "../ScamInputGroup/MultiInput";
import ScamInput from "./../ScamInputGroup/index";
import { Dispatch, SetStateAction } from "react";

type Payload = {
	bankDetails: { input1: string };
	websiteUrl: { input1: string };
	phoneNumber: { input1: string };
	socialMedia: { input1: string };
	name: string;
	email: string;
};

interface ComponentProps {
	Email: string;
	Name: string;
	setData: Dispatch<SetStateAction<Payload>>;
	BankDetailsInput: string[];
	BankDetailsValues: { input1: string };
	WebsiteInputs: string[];
	WebsiteInputValues: { input1: string };
	PhoneNumberInputs: string[];
	PhoneNumberInputValues: { input1: string };
	SocialMediaInputs: string[];
	SocialMediaInputValues: { input1: string };
}
const PersonalInfoInputs: React.FC<ComponentProps> = ({ setData, Email, BankDetailsInput, BankDetailsValues, WebsiteInputValues, WebsiteInputs, PhoneNumberInputValues, PhoneNumberInputs, SocialMediaInputValues, SocialMediaInputs, Name }) => {
	const [bankDetailsInputs, setBankDetailsInputs] = useState(BankDetailsInput);
	const [bankDetailsValues, setBankDetailsValues] = useState(BankDetailsValues);
	const [websiteInputs, setWebSitesInputs] = useState(WebsiteInputs);
	const [websiteInputValues, setWebsiteInputValues] = useState(WebsiteInputValues);
	const [phoneNumberInputs, setPhoneNumberInputs] = useState(PhoneNumberInputs);
	const [phoneNumberInputValues, setPhoneNUmberInputVales] = useState(PhoneNumberInputValues);
	const [socialMediaInputs, setSocialMediaInputs] = useState(SocialMediaInputs);
	const [socialMediaInputValues, setSocialMediaInputValues] = useState(SocialMediaInputValues);
	const [name, setName] = useState(Name);

	const [email, setEmail] = useState(Email);

	const payload = {
		bankDetails: bankDetailsValues,
		websiteUrl: websiteInputValues,
		phoneNumber: phoneNumberInputValues,
		socialMedia: socialMediaInputValues,
		name: name,
		email: email,
	};

	useEffect(() => {
		setData(payload);
	}, [phoneNumberInputValues, socialMediaInputValues, name, email, bankDetailsValues, websiteInputValues]);

	const addInput = (field: string) => {
		const addNew = (arrayofInputs: string[], setArrayOfInputs: Dispatch<SetStateAction<string[]>>, inputValues: any, setInputValues: any) => {
			const arrayofInputsTest = [...arrayofInputs];
			arrayofInputsTest.push(`input${arrayofInputs.length + 1}`);
			setArrayOfInputs(arrayofInputsTest);
			const inputValuesTest = { ...inputValues };
			inputValuesTest[`input${arrayofInputs.length + 1}`] = "";
			setInputValues(inputValuesTest);
		};
		switch (field) {
			case "Bank Details":
				addNew(bankDetailsInputs, setBankDetailsInputs, bankDetailsValues, setBankDetailsValues);
				break;
			case "Website":
				addNew(websiteInputs, setWebSitesInputs, websiteInputValues, setWebsiteInputValues);
				break;
			case "Phone Number":
				addNew(phoneNumberInputs, setPhoneNumberInputs, phoneNumberInputValues, setPhoneNUmberInputVales);
				break;
			case "Social Media":
				addNew(socialMediaInputs, setSocialMediaInputs, socialMediaInputValues, setSocialMediaInputValues);
				break;
		}
	};
	const setInputValues = (e: any, field: string) => {
		const handleChange = (inputValues:{input1:string}, setInputValues:Dispatch<SetStateAction<{input1:string}>>) => {
			const id = e.currentTarget.id;
			const inputValuesTest = { ...inputValues };
			Object.values(inputValues)[Object.keys(inputValues).indexOf(id)]= e.currentTarget.value;
			setInputValues(inputValuesTest);
		};
		switch (field) {
			case "Bank Details":
				handleChange(bankDetailsValues, setBankDetailsValues);
				break;
			case "Website":
				handleChange(websiteInputValues, setWebsiteInputValues);
				break;
			case "Phone Number":
				handleChange(phoneNumberInputValues, setPhoneNUmberInputVales);
				break;
			case "Social Media":
				handleChange(socialMediaInputValues, setSocialMediaInputValues);
				break;
		}
	};

	return (
		<div className="  grid grid-cols-2 h-[45vh] overflow-y-scroll   justify-items-center ">
			<ScamInput
				label="Name"
				value={name}
				setValue={setName}
				errors={""}
			/>
			<ScamInput
				label="Email Address"
				value={email}
				setValue={setEmail}
				errors={""}
			/>
			<MultiScamInput
				label="Bank Details"
				errors={""}
				arrayOfInputs={bankDetailsInputs}
				inputValues={bankDetailsValues}
				addInput={addInput}
				setInputValues={setInputValues}
				field={"Bank Details"}
			/>
			<MultiScamInput
				label="Website URL"
				errors={""}
				arrayOfInputs={websiteInputs}
				inputValues={websiteInputValues}
				addInput={addInput}
				setInputValues={setInputValues}
				field={"Website"}
			/>
			<MultiScamInput
				label="Phone Number"
				errors={""}
				arrayOfInputs={phoneNumberInputs}
				inputValues={phoneNumberInputValues}
				addInput={addInput}
				setInputValues={setInputValues}
				field={"Phone Number"}
			/>
			<MultiScamInput
				label="Social Media Handle"
				errors={""}
				arrayOfInputs={socialMediaInputs}
				inputValues={socialMediaInputValues}
				addInput={addInput}
				setInputValues={setInputValues}
				field={"Social Media"}
			/>
		</div>
	);
};

export default PersonalInfoInputs;
