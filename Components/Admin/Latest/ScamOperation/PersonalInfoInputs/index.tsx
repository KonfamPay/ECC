import { useState, useEffect } from "react";
import { setDatasets } from "react-chartjs-2/dist/utils";
import MultiScamInput from "../ScamInputGroup/MultiInput";
import ScamInput from "./../ScamInputGroup/index";

interface ComponentProps {
	setData: any;
}

const PersonalInfoInputs: React.FC<ComponentProps> = ({ setData }) => {
	const [bankDetailsInputs, setBankDetailsInputs] = useState(["input1"]);
	const [bankDetailsValues, setBankDetailsValues] = useState({ input1: "" });
	const [websiteInputs, setWebSitesInputs] = useState(["input1"]);
	const [websiteInputValues, setWebsiteInputValues] = useState({ input1: "" });
	const [phoneNumberInputs, setPhoneNumberInputs] = useState(["input1"]);
	const [phoneNumberInputValues, setPhoneNUmberInputVales] = useState({ input1: "" });
	const [socialMediaInputs, setSocialMediaInputs] = useState(["input1"]);
	const [socialMediaInputValues, setSocialMediaInputValues] = useState({ input1: "" });
	const [name, setName] = useState("");

	const [email, setEmail] = useState("");

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
		const addNew = (arrayofInputs: any, setArrayOfInputs: any, inputValues: any, setInputValues: any) => {
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
		const handleChange = (inputValues: any, setInputValues: any) => {
			const id = e.currentTarget.id;
			const inputValuesTest = { ...inputValues };
			inputValuesTest[id] = e.currentTarget.value;
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
		<div className=" grid grid-cols-2 h-[45vh] overflow-y-scroll   justify-items-center ">
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
