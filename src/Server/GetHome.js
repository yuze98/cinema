import axios from 'axios';
import React from 'react';
import MovieDB from './MovieDB';


const GetHome = async ()=> {

  const [sHome,setHome] = React.useState();
  React.useEffect(() => {
    MovieDB.get('/movie').then((response) => {
      setHome(response.data.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, []);
        
    return [sHome]
}

export default GetHome;
