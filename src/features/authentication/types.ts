import * as Yup from 'yup';

export type LoginForm = {
    email: string,
    password: string,
}

export type TokenResponse = {
    token: string
}

export const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Minimal password length is 8')
        .max(30, 'Maximal password length is 30')
        .required('Required'),
});

export type RegisterForm = {
    email: string,
    password: string,
    password_confirmation: string,
    fullname: string,
    address: string,
    phone_number: string,
    upper_referral_code: string,
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const RegisterFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Minimal password length is 8')
        .max(30, 'Maximal password length is 30')
        .required('Required'),
    password_confirmation: Yup.string()
        .min(8, 'Minimal password length is 8')
        .max(30, 'Maximal password length is 30')
        .oneOf([Yup.ref('password'), null], "Password doesn't match")
        .required('Required'),
    address: Yup.string()
        .required('Required'),
    phone_number: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    fullname: Yup.string()
        .required('Required'),
    upper_referral_code: Yup.string()
});