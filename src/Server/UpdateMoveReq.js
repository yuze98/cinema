import MovieDB from "./MovieDB";

const UpdateMovieReq = async (props) => {
  const mov = {
    img: props.img,
    title: props.title,
    room: props.screen,
    startTime: props.starts,
    endTime: props.ends,
    date: props.date,
  };
  const id = props.id
  return await MovieDB.patch("movie/",id,'/',mov)
    .then((response) => {
      console.log(response.data);
      return response.data.status;
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

export default UpdateMovieReq;
