import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";
import { useEffect, useState } from "react";
function PosterModal(props) {
  const [shown, setShown] = useState(props.isShown);
  useEffect(() => {
    console.log("inside useEffect");
    setShown(props.isShown);
  }, [props.isShown]);
  const date = "17/12/2021";
  const start = "1:00 PM";
  const end = "3:30 PM";
  const Screeing_Room = "10C";

  return (
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
            <li style={styles.details_title,{fontSize:60,fontFamily:'Roboto',padding:20,fontWeight:'bold',color:'white'}}>Details</li>
            <div style={{height:1,width:'100%',backgroundColor: 'white',margin:'auto'}}/>
            <br/>
            <li style={styles.details_title}>Date:</li>
            <li style={styles.details}>{date}</li>
            <li style={styles.details_title}>Starts: </li>
            <li style={styles.details}>{start}</li>
            <li style={styles.details_title}>Ends: </li>
            <li style={styles.details}>{end}</li>
            <li style={styles.details_title}>Screen: </li>
            <li style={styles.details}>{Screeing_Room}</li>
          </ul>
        </div>
        <div style={{ paddingBottom: 300 }}>
          <h1 style={styles.title}>{props.title}</h1>
          <div>
            <a href="/Reservation">
              <img
                alt="Movie Poster"
                style={{ width: 370, height: 500 }}
                src={props.image}
              />
            </a>
          </div>
          <div style={{ marginTop: 100 }}>
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
  );
}
export default PosterModal;
