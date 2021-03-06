import MovieDB from './MovieDB';


const GetReservations = async (props)=> {

  let config = {
    headers: 
      {Authorization: 'Bearer '+props.token}
    
  }
    return await MovieDB.get('/reserve/'+props.id,config).then((response) => {
      console.log(response.data)
      return(response.data.data.reservations);
    }).catch((e)=>{
        console.log(e)
        return
    });
}

export default GetReservations;
