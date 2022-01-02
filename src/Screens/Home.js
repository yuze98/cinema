import React, { useState } from "react";
import "onsenui/css/onsen-css-components.css";
import ToolbarComp from "../Components/Toolbar"
import Poster from "../Components/Poster";
import AddMovie from "../Components/AddMovie";
import GetMovie from "../Server/GetMovie";
import { styles } from "../Styles/Styles";
import { useLocation } from "react-router-dom";
export default function Home(props) {

  const [movDet,setMovDet] = useState(GetMovie('/61c73770017b0cbec6c84133'))  //returns the Movie Details array
  const [here,setHere] = useState(true)  //returns the Movie Details array
  const location = useLocation();
  const isManager = location.state.isManager
  const token = location.state.token
  // React.useEffect(()=>{
  //   async function getm(){
  //     setMovDet(await GetMovie('/61c73770017b0cbec6c84133'));
  //     setHere(false)
  //   }
  //   if (here)
  //   {
  //     getm()
  //   }
  //   console.log('here')
  // },[]);
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        heigh:"100%",
        backgroundColor: "#B1D0E0",
      }}
    >
      <ToolbarComp Place="Home"/>
      <div>
        <h1
          style={{
            fontSize: 42,
            color: "Black",
            marginLeft: "45%",
            opacity: 0.8,
            fontWeight:'Roboto'
          }}
        >
          Movie List
          
          
        </h1>
        <button input="button" style={styles.button} onClick={()=>{console.log(location.state.ahmed)}} > heree</button>
      </div>
      <div style={{ backgroundColor: "black", width: "100%", height: 1 }} />
      <div style={styles.topContainer}>
        {/* we'll add Condition to show this if user is manager */}
        {location.state.isManager?(<AddMovie />):null}
        <Poster
          title="SpiderMan: No Way Home"
          image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg"
        />
        <Poster
          title="Free Guy"
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEUMqXik1Ntuc2NTpCgbX2JENwlZD3kwDZa4nDm6TCkXVX9FvU"
        />
        <Poster
          title="Black Widow"
          image="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
        />
        <Poster
          title="Black dude"
          image="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
        />
      </div>
    </div>
  );
}
