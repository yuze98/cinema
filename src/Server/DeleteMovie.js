import MovieDB from './MovieDB';


const DeleteMovie = async (props)=> {
  let config = {
    headers: 
      {Authorization: 'Bearer '+props.token}
    
  }
  console.log('delete movie id',props.id)
    return await MovieDB.delete('/movie/'+props.id,config).then((response) => {
      console.log(response.data.status)
      return(response.data.status);
    }).catch((e)=>{
        console.log(e)
        return
    });
}

export default DeleteMovie;
