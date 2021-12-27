import { useState } from "react";

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
            <form>
                <label className='usernameLoginLabel'>Username:</label><br />
                <input type="text" className='usernameLoginTextbox' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label className='passwordLoginLabel'>Password:</label><br />
                <input type="password" className='passwordLoginTextbox' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input type='submit' className='loginButton' value='Login' onClick={handleLogin} /><br />
            </form>
        </div>
    );
}
 
export default Login;