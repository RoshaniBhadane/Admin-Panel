const staticEmail: string = "roshani@gmail.com"
const staticPassword: string = "test123"

const validateEmail = (email: string): boolean => {
    let regex: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !!(email && regex.test(email) === false);
}
const validatePassword = (password: string): boolean => {
    return !!(password && password.length < 5);
}

const validateCredentials = (email: string, password: string): boolean => {
    return !!(email === staticEmail && password === staticPassword);
}

export { validateEmail, validatePassword, validateCredentials }