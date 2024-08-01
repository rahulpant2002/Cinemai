const validateForm = (emailMob, password, name=null, email=null, mob=null) => {
    const isEmailMobValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(emailMob);

    const isPasswordVaild = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailMobValid) return "Email is invalid...";
    if(!isPasswordVaild) return "Password is Invalid...";

    return null;
}

export default validateForm;
