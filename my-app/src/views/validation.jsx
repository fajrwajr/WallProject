export const validation = (formData) => {

    let errors = {}

    if (formData.name == ''){
        errors.name = "Name cannot be empty"
    }
    if (formData.email === '') {
        errors.email = "Email cannot be empty"
    }
    if (formData.password === '') {
        errors.password = "Password cannot be empty"
    }
    if (formData.re_password === '') {
        errors.re_password = "Retype Password cannot be empty"
    }
  
    if(!formData.name){
        errors.name="Name is Required"
    }
    if(!formData.email){
        errors.name="Email is Required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email="Email is Invalid"
    }
    if(!formData.password) {
        errors.password="Password is Required"
    } else if (formData.password.length < 5) {
        errors.password="Password length is too short"
    }
    if(!formData.re_password) {
        errors.re_password="Password is Required"
    } else if (formData.password.length < 5) {
        errors.re_password="Password length is too short"
    }
    return errors;
}