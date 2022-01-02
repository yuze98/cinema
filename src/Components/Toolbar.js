import { Toolbar } from "react-onsenui";
import { styles } from "../Styles/Styles";
export default function ToolbarComp(props) {
    return (
    <Toolbar
        style={{
          height: 100,
          padding: 23,
          background: "#1A374D",
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
        <div className="center" style={{ fontSize: 50, color: "#E26A2C" }}>
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
