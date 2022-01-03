import Seats from "../Components/Seats";
import ToolbarComp from "../Components/Toolbar";
import Poster from "../Components/Poster";
import {useState, useEffect} from "react"
import GetMovie from "../Server/GetMovie";
import { useLocation } from "react-router";
const seatL = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]; //dummy array for now, will be gotten via request

export default function Reservation(props) {
  var array = [{}]
  //array = GetMovie({id:110}) 
  const location = useLocation()
  const title = location.state.mov.title
  const room = location.state.mov.room
  console.log(array)
  return (
    <div>
      <ToolbarComp Place="Reservation"/>
      <div style={styles.bg}>
        
        <div style={styles.grid}>
          <Seats seatt={seatL} />
 
        </div>
        <div style={styles.poster}>
          <h1>{title}</h1>
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg" width="250" height="380"/>
        </div>
        <div style ={styles.info}>
          <h1> Screen: {room}</h1>
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
    position: "absolute",
    left: "80%",
    top: "30%",
    textAlign: "center"
  },
};
