import React, {useState} from 'react'
export default function Seats(props) {
    const [hoverButton, setHoverButton] = useState(false);
    const seats = []
    var count = 0
    for (const seat of props.seatt)
    {
      if (seat == 1)
      {
          seats.push(<button id={count} onMouseLeave={() =>setHoverButton(true)} style={styles.notbutton}></button>)
      }
      else 
      {
          seats.push(<button id={count} onMouseLeave={() =>setHoverButton(true)} style={hoverButton == true ? styles.button : styles.clickedbutton}></button>)
          
      }
      count++
      if (count%5 ==0)
      {
          seats.push(<br/>)
      }
    }
    return (
        <div style={styles.bg}>
            {seats}
        </div>
    )

}

const styles = {
    button: {
      width: 40,
      height: 40,
      'background-color': 'grey',
      },
    clickedbutton: {
        width: 40,
        height: 40,
        'background-color': 'yellow',
        },
    notbutton: {
        width: 40,
        height: 40,
       'background-color': 'red',
    },
    bg: {
        position: 'absolute',
        top: '20%',
    },
    
  };