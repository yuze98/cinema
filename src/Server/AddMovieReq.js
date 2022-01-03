import MovieDB from "./MovieDB";

const AddMovieReq = async (props) => {
  const mov = {
    img: props.img,
    title: props.title,
    room: props.screen,
    startTime: props.starts,
    endTime: props.ends,
    date: props.date,
  };
  return await MovieDB.post("movie/",mov)
    .then((response) => {
      console.log(response.data);
      return response.data.status;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

export default AddMovieReq;
