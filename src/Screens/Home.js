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
      <Toolbar
        style={{
          height: 100,
          padding: 23,
          background: "#CFFFDC",
          opacity: 0.85,
        }}
      >
        <div className="left">
          <a href="/">
            <button style={styles.button}>Home</button>
          </a>
        </div>
        <div className="center" style={{ fontSize: 50, color: "#ff0066" }}>
          Home
        </div>
        <div className="right">
          <a href="/Login">
            <button style={styles.button}>Login</button>
          </a>
        </div>
      </Toolbar>
      <div>
        <h1
          style={{
            fontSize: 60,
            color: "Black",
            marginLeft: "45%",
            opacity: 0.8,
          }}
        >
          Movie List
        </h1>
      </div>
      <div style={{ backgroundColor: "black", width: "100%", height: 1 }} />
      <div style={styles.topContainer}>
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
    display: "inline-block",
    padding: 10,
    border: 0.1,
    borderRadius: 12,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ff0066",
    fontSize: 25,
    color: "#ffffff",
    cursor: "pointer",
    width: 250,
    height: 60,
  },
};
