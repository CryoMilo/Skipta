import * as Yup from "yup";

export const billRegisterationSchema = Yup.object().shape({
	place: Yup.string().required("This field is required"),
	amount: Yup.number().required("This field is required"),
});

export const profileRegisterSchema = Yup.object().shape({
	username: Yup.string().required("This field is required"),
	bankAccountName: Yup.string().required("This field is required"),
	bankName: Yup.string().required("This field is required"),
	bankAccountNumber: Yup.string().required("This field is required"),
});
