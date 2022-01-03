import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";
import { useEffect, useState } from "react";
import MovieDB from "../Server/MovieDB";

function AddMovieModal(props) {
  const [shown, setShown] = useState(props.isShown);
  useEffect(() => {
    console.log("inside useEffect", props.isShown);
    setShown(props.isShown);
  }, [props.isShown]);
  //const nav = useNavigate()
  const [date, setDate] = useState("");
  const [starts, setStarts] = useState("");
  const [ends, setEnds] = useState("");
  const [screen, setScreen] = useState("");
  const [poster, setPoster] = useState(
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8af5e086459421.5d9a79cc7e3d5.jpg"
  );
  const [title, setTitle] = useState("");
  function handlesubmit(event) {
    alert("Movie Added!", date);
    MovieDB.post("movie/", {
      img: {},
      title: title,
      room: screen,
      startTime: starts,
      endTime: ends,
      date: date,
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((e) => {
        console.log(e);
      });
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
            flexDirection: "row",
            display: "flex",
          }}
        >
          <form onSubmit={() => handlesubmit()} style={{ paddingLeft: "30%" }}>
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
                Add Movie Details
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

          <div style={{ padding: 50 }}>
            <div style={{ textAlign: "center" }}>
              <h2>{title}</h2>
            </div>
            <div style={{ margin: "auto" }}>
              <img
                alt="Movie Poster"
                style={{ width: 250, height: 380, paddingLeft: 50 }}
                src={poster}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default AddMovieModal;
