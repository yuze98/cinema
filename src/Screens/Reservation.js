import Seats from "../Components/Seats";
import ToolbarComp from "../Components/Toolbar";
import Poster from "../Components/Poster";
import {useState, useEffect} from "react"
import { useLocation, useNavigate } from "react-router";
import MovieDB from "../Server/MovieDB";
const seatL = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]; //dummy array for now, will be gotten via request

export default function Reservation(props) {
  var array = [{}]
  const location = useLocation()
  const nav = useNavigate()
  const title = location.state.mov.title
  const [m, setm] = useState(true);
  const [mov,setmov] = useState()
  const [room,setRoom] = useState()
  const [seats,setSeats] = useState([])
  const isManager = location.state!==null?location.state.isManager:false;
  const token = location.state!==null?location.state.token:'';
  const userId = location.state!==null?location.state.userId:'';
  const name = location.state!==null?location.state.name:'';
  console.log("ha")

  const logout = ()=>{
    token = null
    userId = ''
    isManager=false
    nav('/login')
  }
  console.log(location.state.mov._id)
  useEffect(() => {
    if (m) {
      MovieDB.get("/movie/" + location.state.mov._id)
        .then((response) => {
          setmov(response.data.data);
          console.log(response.data.data)
          setRoom(response.data.data.room)
          setSeats(response.data.data.seats)      
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (m) {
      setm(false);
    }
  }, [m]);
  console.log(seats)
  return (
    <div>
      <ToolbarComp Place="Reservation" logout={logout} token={token} name= {name} isManager = {isManager} userId={userId}/>
      <div style={styles.bg}>
        
        <div style={styles.grid}>
          <Seats seatt={seats} movid = {location.state.mov._id} isManager = {isManager} token={token} userId={userId}/>
 
        </div>
        <div style={styles.poster}>
          <h1>{title}</h1>
          <img src={location.state.mov.img} width="250" height="380"/>
        </div>
        <div style ={styles.info}>
          <h1> Date: {location.state.date} </h1>
        </div>
        <div style ={styles.info}>
          <h1> Starts at: {location.state.start} </h1>
        </div>
        <div style ={styles.info}>
          <h1> Ends at: {location.state.end} </h1>
        </div>
        <div style ={styles.info}>
          <h1> Screen: {room} </h1>
        </div>

      </div>
    </div>
  );
}

const styles = {
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#B1D0E0",
  },
  grid: {
    position: "absolute",
    left: "35%",
    top: "3%"
  },
  poster: {
    position: "absolute",
    left: "5%",
    top: "10%",
    textAlign: "center"
  },
  info: {
    textAlign: "right",
    marginRight: '10%',
    margin: '5%',
  },
};
