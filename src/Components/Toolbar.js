import { Toolbar } from "react-onsenui";
export default function ToolbarComp(props) {
    return (
    <Toolbar
        style={{
          height: 100,
          padding: 23,
          background: "#CFFFDC",
          opacity: 0.85,
        }}
      >
        <div className="left">
          <a href="/">
            <button
              style={styles.button}
            >
              Home
            </button>
          </a>
        </div>
        <div className="center" style={{ fontSize: 50, color: "#ff0066" }}>
          {props.Place}
        </div>
        <div className="right">
          <a href="/Login">
            <button style={styles.button}>Login</button>
          </a>
        </div>
      </Toolbar>
    )
}
const styles = {
    topContainer: {
      display: "flex",
      flexDirection: "row",
    },
    toph1: {
      color: "red",
    },
    backg: {
      backgroundColor: "#CFFFDC",
    },
    button: {
      display: "inline-block",
      padding: 10,
      border: 0.1,
      borderRadius: 12,
      fontFamily: "Roboto",
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#ff0066",
      fontSize: 25,
      color: "#ffffff",
      cursor: "pointer",
      width: 250,
      height: 60,
    },
  };