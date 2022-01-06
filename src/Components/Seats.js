import React, {useState} from 'react'
import MovieDB from '../Server/MovieDB'
import {useEffect} from "react"
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
            const newReserved = reserved.filter((item) => item != Number(e.target.id))
            setReserved(newReserved)
        }
        else
        {
            e.target.style.background = 'rgb(255, 154, 60)'
            const newReserved = [...reserved]
            newReserved.push(Number(e.target.id))
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
        //send request here
            console.log(props.movid)
            
            
            console.log(reserved.map(i=>Number(i)))
            /*MovieDB.get("/movie/" + props.movid)
                .then((response) => {
                  console.log(response.data.data)
                  console.log()
                  setReserved(response.data.data.seats)
                  
                }).catch((e) => {
                  console.log(e);
                });*/ //WILL BE NEEDED IN CASE WE WANT TO CHECK FOR CONCURRENT RESERVATIONS 
              MovieDB.post("/reserve/" + props.movid, 
              {
                userID: "Ahmed",
                seats: reserved
              })
                .then((response) => {
                  console.log(response.data.data)
                  alert('Congratulations you will have one of the best experiences in the world ^_^')
                })
                .catch((e) => {
                  console.log(e);
                });
                
                

        setReserved([])

    }
    console.log(reserved)
    return (
        <div>
            <div style={styles.screen}>
                    Screen
                </div>
                <br></br>
            <div style={styles.bg}>
                {seats}
                
            </div>
            <div style={styles.buttons}>
                <br></br>
                
                <button style={styles.otherbutton} onClick={handleReserve}>Reserve Seats!</button>
                <button style={styles.otherbutton} onClick={handleClear}>Clear Selected Seats</button>
            </div>
        </div>
        
    )

}

const styles = {
    button: {
      width: 110,
      height: 110,
      'background-color': 'grey',
      },
      selbutton: {
        width: 110,
        height: 110,
        'background-color': 'rgb(255, 154, 60)',
        },
    clickedbutton: {
        width: 110,
        height: 110,
        'background-color': 'yellow',
        },
    notbutton: {
        width: 110,
        height: 110,
       'background-color': 'red',
    },
    buttons: {
        position: 'absolute',
        top: '100%',
        left: '20%',
      },
    otherbutton: {
        display: 'inline-block',
        padding:10,
        marginLeft: 5,
        marginRight: 5,
        border:0.1,
        borderRadius: 12,
        position: "relative",
        left: -40,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor:'#ff0066',
        fontSize: 25,
        cursor: 'pointer'
    },
    screen: {
        
        width: 550,
        height: 30,
        color: "white",
        backgroundColor: "black",
        textAlign: "center"
      },
    
  };