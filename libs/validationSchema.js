import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Email must be valid")
        .required("Email is required"),
    message: yup.string().required("Message is required"),
});