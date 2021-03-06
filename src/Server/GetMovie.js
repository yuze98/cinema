import MovieDB from './MovieDB';


const GetMovie = async (props)=> {

    return await MovieDB.get('movie/'+props.id).then((response) => {
      console.log(response.data)
      return(response.data.data.reservations);
    }).catch((e)=>{
        console.log(e)
        return
    });
}

export default GetMovie;
