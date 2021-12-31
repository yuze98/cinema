import axios from 'axios';

let baseURL = "http://e1e5-102-188-120-135.ngrok.io/movie";
// baseURL = "https://api.publicapis.org/entries";


const GetHomeIds = async ()=> {

  const [ids,setIds] = React.useState();
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setIds(response.data);
      console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });
  }, []);
        
    return [ids]
}

export default GetHomeIds;
