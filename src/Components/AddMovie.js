import React, { useState } from "react";
import { styles } from "../Styles/Styles";
import AddMovieModal from "./AddMovieModal";
export default function AddMovie(props) {
  const title = 'Add Movie';
  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-IP68ZlFBoozaJH3YxzJaRtZOlemYek7Mw&usqp=CAU";
  const [isShown, setisShown] = useState(false);
  return (
    <div style={{ padding: 50 ,}}>
      <div>
      <AddMovieModal isShown={isShown}/>
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