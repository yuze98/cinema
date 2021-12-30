import axios from "axios";
import React from "react";

let baseURL = "http://e1e5-102-188-120-135.ngrok.io/movie/61c73770017b0cbec6c84133";
//const baseURL = "http://localhost:3000/sign-in";
//let baseURL = "http://e1e5-102-188-120-135.ngrok.io/sign-in";
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  };
export default function TestRequests() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzY1MDU1YTRjZTZlN2Q2NmEwMzlmMSIsImlhdCI6MTY0MDkwMDYwOCwiZXhwIjoxNjQwOTA0MjA4fQ.oM4tc9T_HRhncELa8Kx6WyMu66kFTeRquIwexegO2qU"
        }
      })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
/*
.post(baseURL)
*/