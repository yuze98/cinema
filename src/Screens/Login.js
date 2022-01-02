import { useEffect, useState } from "react";
import { styles } from "../Styles/Styles";
import ToolbarComp from "../Components/Toolbar";
import UserSignIn from "../Server/UserSignIn";
import { useNavigate } from "react-router-dom";
//TODO: STYLING
const Login = () => {
    //STATES NEEDED
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const naviagte = useNavigate()
    const [mounted,setm] = useState(false);
    //A HANDLER FOR THE LOGIN BUTTON
    const handleLogin = async (e) => {
        //TODO: BACKEND REQUEST
        setm(true)
        naviagte('/',{state:{token: 'token',isManager:true}})
        
        e.preventDefault();
    }
    useEffect(()=>{
      if(mounted)
      {
        const [message,success,token] = UserSignIn({password: password,email :username})
      }
      else
      {
        setm(false)
      }
    },[mounted])
    //LOGIN SCREEN
    return (
        <div className="login">
          <ToolbarComp Place="Login"/>
            <form >
                <label style={styles.label} className='usernameLoginLabel'>Username:</label><br />
                <input type="text" style={styles.textBox} className='usernameLoginTextbox' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label style={styles.label} className='passwordLoginLabel'>Password:</label><br />
                <input type="password" style={styles.textBox} className='passwordLoginTextbox' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input type='submit' style={styles.loginAndRegisterButtons} className='loginButton' value='Login' onClick={handleLogin} /><br />
            </form>
            <a href="/Signup"><button style={styles.loginAndRegisterButtons}> Register </button></a>
        </div>
    );
}
 
export default Login;