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
  let config = {
    headers: { Authorization: "Bearer " + props.token },
  };
  console.log(mov);
  return await MovieDB.post("/movie", mov, config)
    .then((response) => {
      console.log(response.data.status);
      return response.data.status;
    })
    .catch((e) => {
      console.log(e);
      return e.response.status;
    });
};

export default AddMovieReq;
