import MovieDB from './MovieDB';


const CancelReservations = async (props)=> {
  let config = {
    headers: 
      {Authorization: 'Bearer '+props.token}
    
  }
  console.log('cancel id',props.id)
    return await MovieDB.delete('/cancel/'+props.id,config).then((response) => {
      console.log(response.data.status)
      return(response.data.status);
    }).catch((e)=>{
        console.log('this is the status error',e.response.status)
        return e.response.status
    });
}

export default CancelReservations;
