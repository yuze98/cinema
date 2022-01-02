import React, { useState } from "react";
import PosterModal from "./PosterModal";
import { styles } from "../Styles/Styles";
export default function Poster(props) {
  const title = props.title;
  const image = props.image;
  const [isShown, setisShown] = useState(false);
  return (
    <div style={{ padding: 50 }}>
      <div>
      <PosterModal mov = {props.mov} isShown={isShown} title={props.title} image={props.image} isManager={props.isManager}/>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>{title}</h2>
      </div>
      <div style={{ margin: "auto" }}>
        <button
          type="button"
          style={styles.poster_button}
          onClick={() => {
            
            setisShown(!isShown);
            console.log(isShown);
          }}
        >
          <img
            alt="Movie Poster"
            style={{ width: 250, height: 380, paddingLeft: 50 }}
            src={image}
          />
        </button>
      </div>
    </div>
  );
}