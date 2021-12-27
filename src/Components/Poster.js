import React from "react";
export default function Poster() {
  const title = "SpiderMan: No Way Home";
  const image =
    "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg";
  return (
    <div style={{padding: 20}}>
      <div style={{textAlign:'center'}}>
        <h2>{title}</h2>
      </div>
      <div style={{margin:'auto',padding:10}}>
        <a href="/Reservation">
          <img style={{ width: 270, height: 400 }} src={image} />
        </a>
      </div>
    </div>
  );
}
