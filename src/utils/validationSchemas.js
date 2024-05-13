import * as Yup from "yup";

export const billRegisterationSchema = Yup.object().shape({
	place: Yup.string().required("This field is required"),
	amount: Yup.string().required("This field is required"),
});
