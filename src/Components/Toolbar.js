import { Toolbar } from "react-onsenui";
import { styles } from "../Styles/Styles";
export default function ToolbarComp(props) {
  return (
    <Toolbar
      style={{
        height: 150,
        padding: 23,
        background: "#1A374D",
        opacity: 0.85,
      }}
    >
      <div className="left">
        <a href="/">
          <button style={styles.button}>Home</button>
        </a>
      </div>
      <div className="center" style={{ fontSize: 50, color: "#E26A2C" }}>
        {props.Place}
        {props.token !== null ? (
          <h2 style={{ color: "white", opacity: 0.8 }}>Welcome {props.name}</h2>
        ) : null}
      </div>

      <div className="right">
        {props.token == null ? (
          <a href="/Login">
            {" "}
            <button style={styles.button}>Login</button>
          </a>
        ) : (
          <div>
            <a href="/Login">
              <button style={styles.button} onClick={props.logout}>
                Logout
              </button>
            </a>
          </div>
        )}
      </div>
    </Toolbar>
  );
}
