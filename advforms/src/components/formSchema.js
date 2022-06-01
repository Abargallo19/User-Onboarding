import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('required')
    .min(3,'gotta be 3'),

    email: yup
    .string()
    .email('Must be email')
    .required('email is required'),

    password: yup
    .string()
    .trim()
    .required('required')
    .min(5, 'gotta be at least 5'),

    tos: yup
    .boolean()
    .oneOf([true], 'must accept terms')
    
    

})





export default formSchema;