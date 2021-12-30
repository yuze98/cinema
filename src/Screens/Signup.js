import { useState } from "react";

//TODO: STYLING
const Signup = () => {
    //STATES NEEDED
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('customer');
    const [validationState, setValidationState] = useState('');

    //A HANDLER FOR THE REGISTER BUTTON
    const handleRegister = (e) => {
        var regEx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        if (password.length <= 8)
        {
            setValidationState('Password should be more than 8 characters !');
        }
        else if (!regEx.test(password))
        {
            setValidationState('Password should contain at least 1 digit and 1 letter with no special characters!');
        }
        else if (password !== confirmPassword)
        {
            setValidationState('Password and confirm password fields do not match !');
        }
        else
        {
            setValidationState('Account created successfully !');
            //TODO: BACKEND REQUEST
        }
        e.preventDefault();
    }
    
    //SIGNUP SCREEN
    return (
        <div className="signup">
            <form onSubmit={handleRegister}>
                <label className='usernameRegisterLabel'>Username:</label><br />
                <input type="text" className='usernameRegisterTextbox' placeholder='Enter your username' required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label className='passwordRegisterLabel'>Password:</label><br />
                <input type="password" className='passwordRegisterTextbox' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <label className='passwordConfirmLabel'>Confirm Password:</label><br />
                <input type="password" className='passwordConfirmTextbox' placeholder='Enter your password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                <label className='firstNameLabel'>First Name:</label><br />
                <input type="text" className='firstNameTextbox' placeholder='Enter your first name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
                <label className='lastNameLabel'>Last Name:</label><br />
                <input type="text" className='lastNameTextbox' placeholder='Enter your last name' required value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />
                <label className='emailAddressLabel'>Email Address:</label><br />
                <input type="text" className='emailAddressTextbox' placeholder='Enter your email address' required value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label className='roleLabel'>Role:</label><br />
                <select className='roleCombobox' value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="manager">Manager</option>
                <option value="customer" selected>Customer</option>
                </select><br />
                <input type='submit' className='registerButton' value='Register'/><br />
                <p>{validationState}</p>
            </form>
      </div>
    );
}
 
export default Signup;