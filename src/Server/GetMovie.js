import axios from 'axios';
import React from 'react';

let baseURL = "https://localhost:3000/movie";
// baseURL = "https://api.publicapis.org/entries";


const GetMovie = async (props)=> {

  //const id = '/61c73770017b0cbec6c84133'
  const id = props.id
  const [movieDet,setMovieDet] = React.useState();
  React.useEffect(() => {
    axios.get(baseURL+id).then((response) => {
      setMovieDet(response.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, [id]);
        
    return [movieDet]
}

export default GetMovie;
