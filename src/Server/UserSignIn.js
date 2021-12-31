import axios from 'axios';

let baseURL = "http://e1e5-102-188-120-135.ngrok.io/sign-in";
// baseURL = "https://api.publicapis.org/entries";


const UserSignIn = async (props)=> {

  //const id = '/61c73770017b0cbec6c84133'
  const cred = {
      password: props.password,
      email: props.email
  }
  const [message,setMessage] = React.useState();
  React.useEffect(() => {
    axios.post(baseURL,cred).then((response) => {
      console.log(response.data)
      setMessage('User Sign in with status:'+response.status)
    }).catch((e)=>{
        console.log(e)
        setMessage('User Can\'t Sign in with status:'+response.status)
    });
  }, []);
        
    return [message]
}

export default UserSignIn;
