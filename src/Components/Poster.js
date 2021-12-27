import React from "react";
export default function Poster(props) {
  const title = props.titlee;
  const image = props.imagee;
    return (
    <div style={{padding: 20}}>
      <div style={{textAlign:'center'}}>
        <h2>{title}</h2>
      </div>
      <div style={{margin: 'auto'}}>
        <a href="/Reservation">
          <img style={{ width: 270, height: 400, paddingLeft: 50}} src={image} />
        </a>
      </div>
    </div>
  );
}
