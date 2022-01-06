import { useEffect, useState } from "react";
import { styles } from "../Styles/Styles";
import ToolbarComp from "../Components/Toolbar";
import { useNavigate } from "react-router-dom";
import MovieDB from "../Server/MovieDB";

//TODO: STYLING
const Login = () => {
  //STATES NEEDED
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //var isManager = false;
  var token= null;
  var id= ''
var name= 'Sa3d el Dally'
  const naviagte = useNavigate();
  //A HANDLER FOR THE LOGIN BUTTON\
  const handleLogin = async (e) => {
    //TODO: BACKEND REQUEST
    await MovieDB.post("/sign-in", { password: password, email: username })
      .then((response) => {
        console.log(response.data);
        token = (response.data.token);
        id = (response.data.data.user._id);
        name = (response.data.data.user.firstName)

          naviagte("/", { state: { token: token, isManager: response.data.data.user.role === "manager", id: id,name: name} });
      })
      .catch((e) => {
          alert('Oh no login failed :(')
        console.log(e);
      });
    
    e.preventDefault();
  };
  //LOGIN SCREEN
  return (
    <div className="login">
      <ToolbarComp Place="Login" token={token}/>
      <form>
        <label style={styles.label} className="usernameLoginLabel">
          Username:
        </label>
        <br />
        <input
          type="text"
          style={styles.textBox}
          className="usernameLoginTextbox"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label style={styles.label} className="passwordLoginLabel">
          Password:
        </label>
        <br />
        <input
          type="password"
          style={styles.textBox}
          className="passwordLoginTextbox"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="button"
          style={styles.loginAndRegisterButtons}
          className="loginButton"
          value="Login"
          onClick={handleLogin}
        />
        <br />
      </form>
      <a href="/Signup">
        <button style={styles.loginAndRegisterButtons}> Register </button>
      </a>
    </div>
  );
};

export default Login;
