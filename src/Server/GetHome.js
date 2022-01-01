import axios from 'axios';
import React from 'react';

let baseURL = "https://localhost:3000/movie";
// baseURL = "https://api.publicapis.org/entries";


const GetHome = async ()=> {

  const [sHome,setHome] = React.useState();
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setHome(response.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, []);
        
    return [sHome]
}

export default GetHome;
