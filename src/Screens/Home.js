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
import CancelReservations from "../Server/CancelReservations";

export default function Home(props) {
  const [homeDet, setHomeDet] = useState(); //returns the Movie Details array
  const location = useLocation();
  const [seats_title, setSeats_title] = useState();
  const [cancelr, setcancelr] = useState();
  const nav = useNavigate();
  const [m, setm] = useState(true); //returns the Movie Details array
  //const location = useLocation();
  const isManager = true; // location.state.isManager; // location.state.isManager
  //const user = location.state.id
  //const token = location.state.token
  console.log(isManager);

  const movie = [];
  const reser = [];
  const ids = [];

  const fetchReservations = async (id) => {
    await GetReservations({ id: id })
      .then((r) => {
        setSeats_title(r);
        console.log("home:", r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const CancelRes = async (id) => {
    const new_id = ids[reser.indexOf(id)];
    console.log(new_id, id);
    await CancelReservations({ id: new_id })
      .then((s) => {
        console.log("cancel home: ", s);
        if (s !== undefined) {
          alert("Reservation canceled successfully!");
          reser.splice(reser.indexOf(id), 1);
          ids.splice(reser.indexOf(id), 1);        }
        else{
          alert("Sorry there was an error :(!");

        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (m) {
      fetchReservations("khaled");
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

  if (seats_title !== undefined) {
    seats_title.forEach((el) => {
      reser.push(el.title + ": " + el.seats);
      ids.push(el._id);
    });
  } else {
    reser.push("You have No Reservations");
  }

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
        <div style={{ padding: 10 }}>
          <h2
            style={{
              fontSize: 25,
              color: "Black",
              opacity: 0.8,
              fontWeight: "Roboto",
            }}
          >
            Your Reservations
          </h2>
          <Dropdown
            options={reser}
            value={'Choose a film to cancel your reservation'}
            onChange={(e) => {
              setcancelr(e.value);
            }}
            placeholder="Show reservations:"
          />
          <button
            input="button"
            onClick={() => {
              CancelRes(cancelr);
            }}
            style={styles.CancelButton}
          >
            Cancel Reservation
          </button>
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
