import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";
import { useEffect, useState } from "react";
import Poster from "./Poster";

function UpdateMovieModal(props) {
  const [shown, setShown] = useState(props.isShown);
  useEffect(() => {
    console.log("inside useEffect update",props.isShown);
    setShown(props.isShown);
  }, [props.isShown]);

  const [date, setDate] = useState(props.date);
  const [starts, setStarts] = useState(props.starts);
  const [ends, setEnds] = useState(props.ends);
  const [screen, setScreen] = useState(props.screen);
  const [poster, setPoster] = useState(props.poster);
  const [title, setTitle] = useState(props.title);

  function handlesubmit(event) {
    alert("Movie Updated!", date);
    setShown(false)
    event.preventDefault();
  }

  return (
    <Modal isOpen={shown} animation="fade">
      <div style={{ margin: "auto" }}>
        <div
          style={{
            padding: 0,
            background: "black",
            opacity: 0.8,
            margin: 50,
            flexDirection:'row',
            display:'flex'
          }}
        >
          <form onSubmit={() => handlesubmit()} style={{paddingLeft:"30%"}}>
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
                Update Movie Details
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
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Date:
              </li>
              <input
                type="text"
                name="Date"
                value={date}
                style={styles.AddMovieBox}
                onChange={(event) => setDate(event.target.value)}
              />
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Starts at:
              </li>
              <input
                type="text"
                name="Starts"
                value={starts}
                style={styles.AddMovieBox}
                onChange={(event) => setStarts(event.target.value)}
              />{" "}
              PM
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Ends at:
              </li>
              <input
                type="text"
                name="Ends"
                value={ends}
                style={styles.AddMovieBox}
                onChange={(event) => setEnds(event.target.value)}
              />{" "}
              PM
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Screen:
              </li>
              <input
                type="text"
                name="Screen"
                value={screen}
                style={styles.AddMovieBox}
                onChange={(event) => setScreen(event.target.value)}
              />
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Title:
              </li>
              <input
                type="text"
                name="Title"
                value={title}
                style={styles.AddMovieBox}
                onChange={(event) => setTitle(event.target.value)}
              />
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Poster:
              </li>
              <input
                type="text"
                name="Poster"
                value={poster}
                style={styles.AddMovieBox}
                onChange={(event) => setPoster(event.target.value)}
              />
              <br />
              <br />
              <br />
              <div style={{ flexDirection: "row" }}>
                <input type="submit" value="Submit" style={styles.button} />
              
                <button
                  type="button"
                  style={styles.button1}
                  onClick={() => {
                    setShown(false);
                  }}
                >
                  <p1>Close</p1>
                </button>
              </div>
            </ul>
          </form>
          
          <Poster title={title} image={poster} style={{marginBottom: '50%',}}/>
        </div>
        
      </div>
    </Modal>
  );
}
export default UpdateMovieModal;
