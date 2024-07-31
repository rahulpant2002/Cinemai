const validateForm = (emailMob, password, name=null, email=null, mob=null) => {
    const isEmailMobValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(emailMob) ||
     /^(\+\d{1,3}[- ]?)?\d{10}$/.test(emailMob);

    const isPasswordVaild = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    // const isNameValid = /[a-zA-Z][a-zA-Z ]*/.test(name);
    // const isMobValid = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(mob);
    // const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);

    if(!isEmailMobValid) return "Email or Mobile Number is invalid...";
    if(!isPasswordVaild) return "Password is Invalid...";
    // if(!isNameValid) return "Name is Invalid";
    // if(!isMobValid) return "Mobile Number is Invalid";
    // if(!isEmailValid) return "Email is Invalid";
    return null;
}

export default validateForm;
