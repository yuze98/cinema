import React from 'react';
import MovieDB from './MovieDB';


const GetMovie = async (props)=> {

  //const id = '/61c73770017b0cbec6c84133'
  const [id,setId] = React.useState(props.id)
  const [movieDet,setMovieDet] = React.useState();
  React.useEffect(() => {
    MovieDB.get('movie/'+id).then((response) => {
      setMovieDet(response.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, [id]);
        
    return [movieDet]
}

export default GetMovie;
