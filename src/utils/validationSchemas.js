import * as Yup from "yup";

export const billRegisterationSchema = Yup.object().shape({
	place: Yup.string().required("This field is required"),
	amount: Yup.string()
		.required("This field is required")
		.matches(
			/^\d+(\.\d*)?$/,
			"Invalid format. Only numbers and optional decimals allowed."
		),
});

export const profileRegisterSchema = Yup.object().shape({
	username: Yup.string().required("This field is required"),
	bankAccountName: Yup.string().required("This field is required"),
	bankAccountNumber: Yup.string()
		.required("This field is required")
		.matches(
			/^\d+(\.\d*)?$/,
			"Invalid format. Only numbers and optional decimals allowed."
		),
	bankName: Yup.string().required("This field is required"),
});
