import React from "react";
import "onsenui/css/onsen-css-components.css";
import { Toolbar, ToolbarButton } from "react-onsenui";
import Poster from "../Components/Poster";
//import styles from "../Styles/Styles.css";

const styles = {
  topContainer: {
    display: "flex",
    flexDirection: "row",
  },
  toph1: {
    color: "red",
  },
};
export default function Home() {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
      }}
    >
      <Toolbar>
        <div className="left">
          <ToolbarButton
            onClick={() => {
              //can be a button to do something
            }}
          >
            Home
          </ToolbarButton>
        </div>
        <div className="center">Home</div>
        <div className="right">
          <ToolbarButton>Logout</ToolbarButton>
        </div>
      </Toolbar>

      <div style={styles.topContainer}>
        <Poster />
        <Poster />
        <Poster />
      </div>
    </div>
  );
}
