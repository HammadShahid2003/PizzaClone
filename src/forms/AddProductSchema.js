import * as Yup from 'yup';

export const AddProductSchema = Yup.object({ 
    name: Yup.string().min(5).max(25).required("Please Enter Name"),
    url: Yup.string().required("Please Enter Picture Url"),
    smallPrice: Yup.number().required("Please Enter Small Price"),
    mediumPrice: Yup.number().required("Please Enter Medium Price"),
    largePrice: Yup.number().required("Please Enter Large Price")


});