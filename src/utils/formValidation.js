import { emailRegex, passwordRegex } from "./constant"

export const checkEmailPassword = (email,password)=>{
    const isEmailfine = emailRegex.test(email);
    const isPassfine = passwordRegex.test(password);
    if(!isEmailfine) return 'Please check email';
    if(!isPassfine) return 'Please provide strong password';
    return null;
}