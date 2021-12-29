import React, { useState } from "react";
import PosterModal from "./PosterModal";
import { styles } from "../Styles/Styles";
export default function Poster(props) {
  const title = props.title;
  const image = props.image;
  const [isShown, setisShown] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <div>
      <PosterModal isShown={isShown} title={props.title} image={props.image}/>
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
            style={{ width: 270, height: 400, paddingLeft: 50 }}
            src={image}
          />
        </button>
      </div>
    </div>
  );
}