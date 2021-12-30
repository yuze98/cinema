import axios from 'axios';

let baseURL = "http://e1e5-102-188-120-135.ngrok.io/movie/61c73770017b0cbec6c84133";
baseURL = "https://api.publicapis.org/entries";


const GetMovie = async ()=> {

  const [movieDet,setMovieDet] = React.useState();
  React.useEffect(() => {
    axios.post(baseURL,{
        password: "tEsTa!237T",
        email: "Khaled@gmail.com"
    }).then((response) => {
      setMovieDet(response.data);
      console.log(response.data)
      setMessage('')
    }).catch((e)=>{
        console.log(e)
        setMessage(e)
    });
  }, []);
        
    return [movieDet]
}

export default GetMovie;
