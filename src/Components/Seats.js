import React, {useState} from 'react'
export default function Seats(props) {
    const seats = []
    const [reserved,setReserved] = useState([])
    var count = 0
    function handleHover (e) {
        console.log(e.target.style.background)
        if (e.target.style.background == 'grey' || e.target.style.background == '')
        {
            e.target.style.background = 'yellow'
        }
    }
    function handleHoverLeave (e) {
        console.log(e.target.id)
        if (e.target.style.background == 'yellow')
        {
            e.target.style.background = 'grey'
        }
            
    }
    function handleClick(e) {
        console.log(e.target.style.background)
        if (e.target.style.background == 'rgb(255, 154, 60)')
        {
            e.target.style.background = 'grey'
            const newReserved = reserved.filter((item) => item != e.target.id)
            setReserved(newReserved)
        }
        else
        {
            e.target.style.background = '#ff9a3c'
            const newReserved = [...reserved]
            newReserved.push(e.target.id)
            setReserved(newReserved)
        }
        console.log(reserved)
        
    }
    for (const seat of props.seatt)
    {
      if (seat == 1)
      {
          seats.push(<button id={count} key={count} style={styles.notbutton}></button>)
      }
      else 
      {
          seats.push(<button id={count} key={count} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} onClick={handleClick} style={styles.button}></button>)
          
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