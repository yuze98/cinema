import MovieDB from "./MovieDB";

const AddMovieReq = async (props) => {
  const mov = {
    img: props.img,
    title: props.title,
    room: props.room,
    startTime: props.startTime,
    endTime: props.endTime,
    date: props.date,
  };
 console.log(mov)
  return await MovieDB.post("/movie",mov)
    .then((response) => {
      console.log(response.data.status);
      return response.data.status;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

export default AddMovieReq;
