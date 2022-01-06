import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";
import { useEffect, useState } from "react";
import AddMovieReq from "../Server/AddMovieReq";
import Dropdown from "react-dropdown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-dropdown/style.css";
import MovieDB from "../Server/MovieDB";

function AddMovieModal(props) {
  const [shown, setShown] = useState(props.isShown);
  useEffect(() => {
    console.log("inside useEffect", props.isShown);
    setShown(props.isShown);
  }, [props.isShown]);
  //const nav = useNavigate()
  const [date, setDate] = useState(new Date());
  const [starts, setStarts] = useState("12:00");
  const [ends, setEnds] = useState("15:00");
  const [screen, setScreen] = useState("1");
  const [poster, setPoster] = useState(
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8af5e086459421.5d9a79cc7e3d5.jpg"
  );
  const [title, setTitle] = useState("");

  const onChange = (val) => {
    setDate(val);
    console.log(val);
  };
  const StartTimes = ["12:00-15:00 PM", "15:00-18:00 PM", "18:00-21:00 PM"];
  const defaultOptions = StartTimes[0];
  const ScreenOptions = ["1", "2"];
  const defaultOptionsc = ScreenOptions[0];

  function readFileDataAsBase64(e) {
    const file = e.target.files[0];

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  }
  async function gowebgo() {
    console.log(
      "data is:",
      title,
      screen,
      starts[0],
      starts[1].split("PM")[0],
      date
    );
    await AddMovieReq({
      img: poster,
      title: title,
      room: screen,
      startTime: starts[0],
      endTime: starts[1].split("PM")[0],
      date: date,
    })
      .then((r) => {
        console.log("this is the addmoviemodal", r);
        if(r !== undefined)
        {
          alert(title, " was Added!");
        }
        setShown(false)
      })
      .catch((e) => {
        console.log(e);
        console("ERR: ", e);
      });
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
          <form style={{ paddingLeft: "30%" }}>
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
                type="file"
                onChange={async (e) => {
                  setPoster(await readFileDataAsBase64(e));
                }}
              />
              <br />
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Choose Date:
                <br />
                <br />
                <Calendar onChange={onChange} value={date} />
              </li>
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Choose Starting time:
                <br />
                <br />
                <Dropdown
                  options={StartTimes}
                  value={defaultOptions}
                  onChange={(e) => {
                    setStarts(e.value.split("-"));
                  }}
                  placeholder="Start Time PM:"
                />
              </li>

              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                Choose Screen
                <br />
                <br />
                <Dropdown
                  options={ScreenOptions}
                  value={defaultOptionsc}
                  onChange={(e) => {
                    setScreen(e.value);
                  }}
                  placeholder="Choose Screen:"
                />
              </li>

              <br />
              <br />
              <br />
              <div style={{ flexDirection: "row" }}>
                <input
                  type="button"
                  onClick={gowebgo}
                  value="Submit"
                  style={styles.button}
                />

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
