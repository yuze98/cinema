import Seats from "../Components/Seats";
const seatL = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]; //dummy array for now, will be gotten via request
export default function Reservation() {
  return (
    <div>
      <div style={styles.bg}>
        <div style={styles.bg}>
          <Seats seatt={seatL} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    width: 250,
    height: 250,
    position: "absolute",
    left: "20%",
    "background-color": "#455d7a",
  },
};
