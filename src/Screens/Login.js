import { useState } from "react";
import { styles } from "../Styles/Styles";
import ToolbarComp from "../Components/Toolbar";
//TODO: STYLING
const Login = () => {
    //STATES NEEDED
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //A HANDLER FOR THE LOGIN BUTTON
    const handleLogin = (e) => {
        //TODO: BACKEND REQUEST
        e.preventDefault();
    }

    //LOGIN SCREEN
    return (
        <div className="login">
          <ToolbarComp Place="Login"/>
            <form>
                <label className='usernameLoginLabel'>Username:</label><br />
                <input type="text" className='usernameLoginTextbox' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label className='passwordLoginLabel'>Password:</label><br />
                <input type="password" className='passwordLoginTextbox' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input type='submit' style={styles.button} className='loginButton' value='Login' onClick={handleLogin} /><br />
            </form>
            <a href="/Signup">
            <button
              style={styles.button}
            >
              Register
            </button>
          </a>
        </div>
    );
}
 
export default Login;