import MovieDB from './MovieDB';


const CancelReservations = async (props)=> {

    return await MovieDB.delete('/cancel/'+props.id).then((response) => {
      console.log(response.data.status)
      return(response.data.status);
    }).catch((e)=>{
        console.log(e)
        return
    });
}

export default CancelReservations;
