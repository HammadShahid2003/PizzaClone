import *  as Yup from "yup";

export const loginSchema=Yup.object({
email:Yup.string().email().required("Please Enter Your Email"),
password:Yup.string().min(8).required("Please Enter Your Password")

});
