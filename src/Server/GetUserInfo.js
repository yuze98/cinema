import axios from 'axios';
import React from 'react';

let baseURL = "https://localhost:3000/movie";
// baseURL = "https://api.publicapis.org/entries";


const GetUserInfo = async ()=> {

  const id = '/61c73770017b0cbec6c84133'
  const [userInfo,setUserInfo] = React.useState();
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setUserInfo(response.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, []);
        
    return [userInfo]
}

export default GetUserInfo;
