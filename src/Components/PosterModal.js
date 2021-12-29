import "../Styles/modal.css";
import { Modal } from "react-onsenui";
import { styles } from "../Styles/Styles";

function PosterModal(props) {
  return (
    <Modal isOpen={props.isShown} animation="fade">
    <div style={{paddingBottom:300,}}>
      <h1 style={styles.title}>{props.title}</h1>

      <div>
        <a href="/Reservation">
          <img
            alt="Movie Poster"
            style={{ width: 370, height: 500,}}
            src={props.image}
          />
        </a>
      </div>
      <div style={{marginTop: 100,}}>
        <button type="button" style={styles.modalbtn} onClick={() => {}}>
          <p1>Close</p1>
        </button>
      </div>
      </div>
    </Modal>
  );
}
export default PosterModal;
