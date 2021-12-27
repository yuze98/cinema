import React from "react";
import "onsenui/css/onsen-css-components.css";
import { Toolbar } from "react-onsenui";
import Poster from "../Components/Poster";


export default function Home() {

  return (
    <div
      style={{
        display: "block",
        width: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Toolbar style={{height:100,padding:23, background:'#CFFFDC'}}>
        <div className="left">
          <a href="/Home">
            <button style={styles.button}>Home</button>
          </a>
        </div>
        <div className="center" style={{fontSize: 50,color: '#ff0066'}}>Home</div>
        <div className="right">
          <a href="/Login">
            <button style={styles.button} >Login</button>
          </a>
        </div>
      </Toolbar>

      <div style={styles.topContainer}>
        <Poster titlee="SpiderMan: No Way Home" imagee="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg"/>
        <Poster titlee="Free Guy" imagee="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEUMqXik1Ntuc2NTpCgbX2JENwlZD3kwDZa4nDm6TCkXVX9FvU"/>
        <Poster titlee="Black Widow" imagee="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"/>
      </div>
    </div>
  );
}

const styles = {
    topContainer: {
      display: "flex",
      flexDirection: "row",
    },
    toph1: {
      color: "red",
    },
    backg: {
      backgroundColor: "#CFFFDC",
    },
    button: {
      display: 'inline-block',
      padding:10,
      border:0.1,
      borderRadius: 12,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      textAlign:'center',
      backgroundColor:'#ff0066',
      fontSize: 25,
      cursor: 'pointer'
      }
  };