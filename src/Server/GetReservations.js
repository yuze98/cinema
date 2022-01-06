import MovieDB from './MovieDB';


const GetReservations = async (props)=> {

    return await MovieDB.get('/reserve/'+props.id).then((response) => {
      console.log(response.data)
      return(response.data.data.reservations);
    }).catch((e)=>{
        console.log(e)
        return
    });
}

export default GetReservations;
