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
  const [starts, setStarts] = useState('');
  const [ends, setEnds] = useState('');
  const [preview, setpreview] = useState(
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8af5e086459421.5d9a79cc7e3d5.jpg"
  );
  const [screen, setScreen] = useState("1");
  const [poster, setPoster] = useState(
  );
  const [title, setTitle] = useState("");

  const onChange = (val) => {
    setDate(val);
    console.log(val);
  };
  const StartTimes = ["12:00-15:00 PM", "15:00-18:00 PM", "18:00-21:00 PM"];
  const ScreenOptions = ["1", "2"];

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
      token:props.token
    })
      .then((r) => {
        console.log("this is the addmoviemodal", r);
        if (r !== undefined) {
          if(r==400)
          {
            alert("Can't add movie since date was passed");

          }
          else if(r==401)
          {
            alert("Screen is busy at this slot");

          }
          else if(r==413)
          {
            alert("Image is too large choose sth else man!!");

          }
          else{
            alert(title + " was added successfully!");
            window.location.reload(true);
          }
        }
        setShown(false);
      })
      .catch((e) => {
        console.log(e);
        alert("This slot is taken!");
        console("ERR: ", e);
      });
  }

  //Function to help Resizing the image if it was uploaded from the user using sharp pkg

  function ResizeImg(base64img, maxWidth, maxHeight) {
    return new Promise((resolve) => {
      let img = new Image();
      img.src = base64img;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        const MAX_WIDTH = maxWidth;
        const MAX_HEIGHT = maxHeight;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
    });
  }

   function resizeImage(img) {
    return ResizeImg(img, 170, 300)
      .then((p) => {
        console.log("new enc", p);
        return p;
      })
      .catch((e) => {
        console.log("resize error", e);
      }); // resize to 10x10
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
                accept="image/png, image/jpeg"
                onChange={async (e) => {
                  const p = await readFileDataAsBase64(e);
                  setPoster(await resizeImage(p));
                  setpreview(p);
                }}
              />
              <br />
              <li style={(styles.details_title, { padding: 20, fontSize: 20 })}>
                OR you can Add Poster's URL:
              </li>
              <input
                input="text"
                onChange={(e) => {
                  setPoster(e.target.value);
                  setpreview(e.target.value);
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
                  value={"Choose Time"}
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
                  value={"Choose Screen"}
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
                src={preview}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default AddMovieModal;
