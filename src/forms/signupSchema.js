import *  as Yup from "yup";

export const signupSchema=Yup.object({
 name:Yup.string().min(5).max(25).required("Please Enter Your Name"),   
email:Yup.string().email().required("Please Enter Your Email"),
password:Yup.string().min(8).required("Please Enter Your Password"),
confirmPassword:Yup.string().oneOf([Yup.ref("password","")],"Password Must Match")

});
