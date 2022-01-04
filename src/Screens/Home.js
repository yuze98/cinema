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
const location = useLocation()
  const [m, setm] = useState(true); //returns the Movie Details array
  //const location = useLocation();
  const isManager =true// location.state.isManager; // location.state.isManager
  //const token = location.state.token
  console.log(isManager);


  useEffect(() => {
    if (m) {
      MovieDB.get("/movie")
        .then((response) => {
          setHomeDet(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (m) {
      setm(false);
    }
  }, [m]);

  const movie = [];
  if (homeDet !== undefined) {
    homeDet.forEach((element) => {
      movie.push(
        <Poster
          mov={element}
          title={element.title}
          image={element.img}
          isManager={isManager}
        />
      );
    });
  } else {
    movie.push(
      <h1
        style={{ margin: "auto", color: "#9B0000", fontSize: 60, padding: 150 }}
      >
        Loading...
      </h1>
    );
  }
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        height: "100%",
      }}
    >
      <ToolbarComp Place="Home" />
      <div>
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
        {isManager !== undefined && isManager === true ? <AddMovie /> : null}
        {movie}
      </div>
    </div>
  );
}
