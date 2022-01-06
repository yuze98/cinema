import React, { useEffect, useState } from "react";
import "onsenui/css/onsen-css-components.css";
import ToolbarComp from "../Components/Toolbar";
import Poster from "../Components/Poster";
import AddMovie from "../Components/AddMovie";
import { styles } from "../Styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import MovieDB from "../Server/MovieDB";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import GetReservations from "../Server/GetReservations";

export default function Home(props) {
  const [homeDet, setHomeDet] = useState(); //returns the Movie Details array
  const location = useLocation();
  const [seats_title, setSeats_title] = useState();
  const nav = useNavigate();
  const [m, setm] = useState(true); //returns the Movie Details array
  //const location = useLocation();
  const isManager = true; // location.state.isManager; // location.state.isManager
  //const token = location.state.token
  console.log(isManager);

  const fetchReservations = async (id) => {
    await GetReservations({id:id})
      .then((r) => {
        setSeats_title(r);
        console.log('home:',r)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (m) {
      fetchReservations('khaled');
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
  const reser = [];

  if (seats_title !== undefined) {
    seats_title.forEach((el)=>{
      reser.push(el.title + ": " + el.seats);
    })
  }
    else{
      reser.push('You have No Reservations');
    }
 

 console.log(seats_title)

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
        <div>
          <Dropdown
            options={reser}
            value={reser[0]}
            onChange={(e) => {}}
            placeholder="Show reservations:"
          />
        </div>
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
