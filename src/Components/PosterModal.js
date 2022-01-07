import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";
import { useEffect, useState } from "react";
import UpdateMovieModal from "./UpdateMovie";
import { useNavigate } from "react-router";
import DeleteMovie from "../Server/DeleteMovie";
function PosterModal(props) {
  const [shown, setShown] = useState(props.isShown);
  const [update, setUpdate] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    console.log("inside useEffect", props.isShown);
    setShown(props.isShown);
  }, [props.isShown]);
  const date =
    props.mov !== undefined ? props.mov.startTime.split("T")[0] : "null"; //"17/12/2021";
  const start =
    props.mov !== undefined
      ? new Date(props.mov.startTime).getHours() + ":00 PM"
      : "0";
  const end =
    props.mov !== undefined
      ? new Date(props.mov.endTime).getHours() + ":00 PM"
      : "0";
  const Screeing_Room = props.mov !== undefined ? props.mov.room : "10";
  const image = props.image;
  const title = props.title;
  const isManager = props.isManager;
  const id = props.mov._id;


  //Delete movie
  const Delete = ()=>{

    DeleteMovie({id:id}).then((s)=>{
      console.log(s)
      alert('movie deleted')
    }).catch((e)=>{
      console.log(e)
      alert('Oh no, there was a problem!')
    })
  }
  return (
    <div>
      {!update ? (
        <Modal isOpen={shown} animation="fade">
          <div style={styles.topContainer}>
            <div
              style={{
                padding: 150,
                background: "black",
                opacity: 0.8,
                margin: 50,
              }}
            >
              <ul style={{ "list-style-type": "none" }}>
                <li
                  style={
                    (styles.details_title,
                    {
                      fontSize: 60,
                      fontFamily: "Roboto",
                      padding: 20,
                      fontWeight: "bold",
                      color: "white",
                    })
                  }
                >
                  Details
                </li>
                <div
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "white",
                    margin: "auto",
                  }}
                />
                <br />
                <li style={styles.details_title}>Date:</li>
                <li style={styles.details}>{date}</li>
                <li style={styles.details_title}>Starts at: </li>
                <li style={styles.details}>{start}</li>
                <li style={styles.details_title}>Ends at: </li>
                <li style={styles.details}>{end}</li>
                <li style={styles.details_title}>Screen: </li>
                <li style={styles.details}>{Screeing_Room}</li>
              </ul>
            </div>
            <div style={{ paddingBottom: 300 }}>
              <h1 style={styles.title}>{props.title}</h1>
              <div>
                <button
                  input="button"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  onClick={() => {
                    nav("/Reservation", {
                      state: {
                        mov: props.mov,
                        isManager: isManager,
                        date: date,
                        start: start,
                        end: end,
                        userId: props.userId,
                        token: props.token,
                        name:props.name

                      },
                    });
                  }}
                >
                  <img
                    alt="Movie Poster"
                    style={{ width: 320, height: 450 }}
                    src={props.image}
                  />
                </button>
              </div>
              <div style={{ flexDirection: "row", marginTop: 100 }}>
                {isManager ? (
                  <div>
                  <button
                    type="button"
                    style={styles.modalbtn}
                    onClick={() => {
                      setUpdate(true);
                    }}
                  >
                    <p1>Update Movie</p1>
                  </button>
                  <button
                  type="button"
                  style={styles.CancelButton}
                  onClick={Delete}
                >
                  <p1>Delete Movie</p1>
                </button>
                </div>
                ) : null}

                <button
                  type="button"
                  style={styles.modalbtn}
                  onClick={() => {
                    setShown(false);
                    nav("/Reservation", {
                      state: {
                        mov: props.mov,
                        isManager: isManager,
                        date: date,
                        start: start,
                        end: end,
                        userId: props.userId,
                        token: props.token,
                        name:props.name

                      },
                    });
                  }}
                >
                  <p1>Get Ticket</p1>
                </button>

                <button
                  type="button"
                  style={styles.modalbtn}
                  onClick={() => {
                    setShown(false);
                  }}
                >
                  <p1>Close</p1>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <UpdateMovieModal
          id={id}
          isShown={shown}
          date={date}
          starts={start}
          ends={end}
          screen={Screeing_Room}
          poster={image}
          title={title}
        />
      )}
    </div>
  );
}
export default PosterModal;
