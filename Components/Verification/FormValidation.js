import Joi from "joi-browser";

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
		lga: Joi.string().max(50).min(3).required().label("Local Government Area"),
		address: Joi.string().max(255).min(10).required().label("Address"),
		photoIdUrl: Joi.string().required().label("Photo Id"),
	});
	return schema.validate(payload, { abortEarly: false });
};
