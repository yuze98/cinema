import "../Styles/modal.css";
import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";
import { useEffect, useState } from "react";
function PosterModal(props) {
  const [shown, setShown] = useState(props.isShown);
  useEffect(() => {
    console.log("inside useEffect");
    setShown(props.isShown);
  }, [props.isShown]);

  return (
    <Modal isOpen={shown} animation="fade">
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
    </Modal>
  );
}
export default PosterModal;
