import { useEffect, useState } from "react";
import { styles } from "../Styles/Styles";
import ToolbarComp from "../Components/Toolbar";
import UserSignIn from "../Server/UserSignIn";
import { useNavigate } from "react-router-dom";
import MovieDB from "../Server/MovieDB";

//TODO: STYLING
const Login = () => {
    //STATES NEEDED
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isManager,setIsManager] = useState();
    const[token,setToken] = useState('')
    
    const naviagte = useNavigate()
    //A HANDLER FOR THE LOGIN BUTTON\
    const handleLogin = async (e) => {
        //TODO: BACKEND REQUEST
        await MovieDB.post('/sign-in',{password: password,email :username}).then((response) => {
          console.log(response.data)
          setToken(response.data.token) 
          response.data.data.user.role==='manager'?setIsManager(true):setIsManager(false);
        }).catch((e)=>{
            console.log(e)
        });
        //naviagte('/',{state:{token: token,isManager:isManager}})
        e.preventDefault();
    }
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