import axios from 'axios';
import React from 'react';

let baseURL = "https://localhost:3000/movie";
// baseURL = "https://api.publicapis.org/entries";


const GetHomeIds = async ()=> {

  const [ids,setIds] = React.useState();
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setIds(response.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, []);
        
    return [ids]
}

export default GetHomeIds;
