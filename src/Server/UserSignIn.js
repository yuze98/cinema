import axios from 'axios';
import React from 'react';

let baseURL = "https://localhost:3000/sign-in";
// baseURL = "https://api.publicapis.org/entries";


const UserSignIn = async (props)=> {
  //const id = '/61c73770017b0cbec6c84133'
  const cred = {
      password: props.password,
      email: props.email
  }
  const[succes,setsuccess] = React.useState(false)
  const [message,setMessage] = React.useState();
  React.useEffect(() => {
    axios.post(baseURL,cred).then((response) => {
      console.log(response.data)
      setMessage('User Sign in with status:'+response.status)
      setsuccess(true)
    }).catch((e)=>{
        console.log(e)
        setMessage('User Can\'t Sign in with status:'+response.status)
        setsuccess(false)
    });
  }, []);
        
    return [message]
}

export default UserSignIn;