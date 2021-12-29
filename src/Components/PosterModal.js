import "../Styles/modal.css";
import { Modal } from "react-onsenui";
import { useState } from "react";

function PosterModal(props) {
  const [isShown, setisShown] = useState(props.isShown);
  return (
    <Modal isOpen={isShown} animation="fade">
      <h1>helllo modal here this is</h1>
      <button type="button" onClick={() => {
        setisShown(false)
      }}></button>
      {/* <a href="/Reservation">
        </a> */}
    </Modal>
  );
}
export default PosterModal;
