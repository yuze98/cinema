import MovieDB from "./MovieDB";

const UpdateMovieReq = async (props) => {
  const mov = {
    img: props.img,
    title: props.title,
    room: props.room,
    startTime: props.startTime,
    endTime: props.endTime,
    date: props.date,
  };
  let config = {
    headers: 
      {Authorization: 'Bearer '+props.token}
    
  }
  const id = props.id
  return await MovieDB.patch("/movie/"+id,mov,config)
    .then((response) => {
      console.log(response.data);
      return response.data.status;
    })
    .catch((e) => {
      console.log(e);
      return e.response.status
    });
};

export default UpdateMovieReq;
