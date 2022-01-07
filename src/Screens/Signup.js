import { useState } from "react";
import { useNavigate } from "react-router";
import ToolbarComp from "../Components/Toolbar";
import RegisterREQ from "../Server/RegisterREQ";
import { styles } from "../Styles/Styles";

//TODO: STYLING
const Signup = () => {
    //STATES NEEDED
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user');
    const [validationState, setValidationState] = useState('');
    const nav = useNavigate()
    //A HANDLER FOR THE REGISTER BUTTON


    const Registering = () =>{
        RegisterREQ({
            username:username,
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            role:role,
        }).then((r)=>{
            
            if(r!==undefined){
                alert('Account created successfully')
                nav('/login')
            }
            else{
                alert('Oh no, there was a problem !')
            }
        })
    }

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
            Registering()
        }
        e.preventDefault();
    }
    
    //SIGNUP SCREEN
    return (
        <div className="signup">
            <ToolbarComp Place="Signup"/>
            <form onSubmit={handleRegister}>
                <label style={styles.label} className='usernameRegisterLabel'>Username:</label><br />
                <input type="text" style={styles.textBox} className='usernameRegisterTextbox' placeholder='Enter your username' required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label style={styles.label} className='passwordRegisterLabel'>Password:</label><br />
                <input type="password" style={styles.textBox} className='passwordRegisterTextbox' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <label style={styles.label} className='passwordConfirmLabel'>Confirm Password:</label><br />
                <input type="password" style={styles.textBox} className='passwordConfirmTextbox' placeholder='Enter your password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                <label style={styles.label} className='firstNameLabel'>First Name:</label><br />
                <input type="text" style={styles.textBox} className='firstNameTextbox' placeholder='Enter your first name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
                <label style={styles.label} className='lastNameLabel'>Last Name:</label><br />
                <input type="text" style={styles.textBox} className='lastNameTextbox' placeholder='Enter your last name' required value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />
                <label style={styles.label} className='emailAddressLabel'>Email Address:</label><br />
                <input type="text" style={styles.textBox} className='emailAddressTextbox' placeholder='Enter your email address' required value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label style={styles.label} className='roleLabel'>Role:</label><br />
                <select style={styles.comboBox} className='roleCombobox' value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="manager">Manager</option>
                <option value="user" selected>user</option>
                </select><br />
                <input type='submit' style={styles.loginAndRegisterButtons} className='registerButton' value='Register'/><br />
                <p style={styles.alert}>{validationState}</p>
            </form>
      </div>
    );
}
 
export default Signup;