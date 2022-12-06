import Joi from "joi";

export const validateVerifyInputs = (payload) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name").min(3).max(50),
		lastName: Joi.string().required().label("Last Name").min(3).max(50),
		phoneNumber: Joi.string()
			.regex(/^[0-9]{11}$/)
			.length(11)
			.label("Phone Number")
			.required(),
		dob: Joi.string().required().label("Date of Birth").length(10),
		state: Joi.string().max(30).min(3).required().label("State"),
		address: Joi.string().max(255).min(10).required().label("Address"),
		NIN: Joi.string().required().max(11).min(11).label("NIN"),
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		middleName: Joi.string().label("Middle Name"),
	});
	return schema.validate(payload, { abortEarly: false });
};
