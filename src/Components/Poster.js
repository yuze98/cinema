import React, { useState } from "react";
import PosterModal from "./PosterModal";

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
          style={{ color: "white", backgroundColor: "transparent",cursor:'pointer',borderColor:'transparent' }}
          onClick={() => {
            setisShown(true);
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
