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
        if (e.target.style.background == 'yellow')
        {
            e.target.style.background = 'grey'
        }    
    }
    
    function handleClick(e) {
        if (e.target.style.background == 'rgb(255, 154, 60)')
        {
            e.target.style.background = 'grey'
            const newReserved = reserved.filter((item) => item != e.target.id)
            setReserved(newReserved)
        }
        else
        {
            const newReserved = [...reserved]
            newReserved.push(e.target.id)
            setReserved(newReserved)
        }
        
    }
    for (const seat of props.seatt)
    {
      if (seat == 1)
      {
          seats.push(<button id={count} key={count} style={styles.notbutton}></button>)
      }
      else 
      {
          seats.push(<button id={count} key={count} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} onClick={handleClick} style={reserved.includes(''+count)? styles.selbutton:styles.button}></button>)
          
      }
      count++
      if (count%5 ==0)
      {
          seats.push(<br/>)
      }
    }
    function handleClear (e) {
        setReserved([])
    }
    function handleReserve (e) {
        setReserved([])

    }
    console.log(reserved)
    return (
        <div>
            <div style={styles.bg}>
                {seats}
                
            </div>
            <div style={styles.buttons}>
            <button style={styles.otherbutton} onClick={handleReserve}>Reserve Seats!</button>
            <button style={styles.otherbutton} onClick={handleClear}>Clear Selected Seats</button>
            </div>
        </div>
        
    )

}

const styles = {
    button: {
      width: 40,
      height: 40,
      'background-color': 'grey',
      },
      selbutton: {
        width: 40,
        height: 40,
        'background-color': 'rgb(255, 154, 60)',
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
    buttons: {
        position: 'absolute',
        top: '100%',
        left: '20%',
      },
      otherbutton: {
        display: 'inline-block',
        padding:10,
        border:0.1,
        borderRadius: 12,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor:'#ff0066',
        fontSize: 25,
        cursor: 'pointer'
        }
    
  };