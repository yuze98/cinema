import React, { useEffect, useState } from "react";
import "onsenui/css/onsen-css-components.css";
import ToolbarComp from "../Components/Toolbar";
import Poster from "../Components/Poster";
import AddMovie from "../Components/AddMovie";
import GetHome from "../Server/GetHome";
import { styles } from "../Styles/Styles";
import { useLocation } from "react-router-dom";
import MovieDB from "../Server/MovieDB";

export default function Home(props) {
  const [homeDet, setHomeDet] = useState(); //returns the Movie Details array
  
  const [m, setm] = useState(true); //returns the Movie Details array
  //const location = useLocation();
  console.log(homeDet)
  const isManager = false; // location.state.isManager
  //const token = location.state.token
  useEffect(()=>{
    //Promise.resolve(takes response)
    if(m){
    MovieDB.get('/movie').then((response) => {
    setHomeDet(response.data.data);
    console.log(response.data)
  }).catch((e)=>{
      console.log(e)
  });
}
if(m)
  {
    setm(false)
  }
},[m])
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        height: "100%",
      }}
    >
      <ToolbarComp Place="Home" />
      <div >
        <h1
          style={{
            fontSize: 42,
            color: "Black",
            marginLeft: "45%",
            opacity: 0.8,
            fontWeight: "Roboto",
            
          }}
        >
          Movie List
        </h1>
      </div>
      <div style={{ backgroundColor: "black", width: "100%", height: 1 }} />
      <div style={styles.topContainer}>
        {/* we'll add Condition to show this if user is manager */}
        {isManager !== undefined && isManager===true  ? <AddMovie /> : null}
        
        <Poster
          title="SpiderMan: No Way Home"
          image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg"
          isManager={isManager}
        />
        <Poster
          title="Free Guy"
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEUMqXik1Ntuc2NTpCgbX2JENwlZD3kwDZa4nDm6TCkXVX9FvU"
          isManager={isManager}
        />
        <Poster
          title="Black Widow"
          image="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
          isManager={isManager}
        />
        <Poster
          title="Black dude"
          image="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"
          isManager={isManager}
        />
      </div>
    </div>
  );
}