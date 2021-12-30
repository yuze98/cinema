import {useEffect,useState} from 'react';
import MovieDB from '../api/MovieDB';

export default () => {

    const[images,setImages] = useState([]);  //will make a function to retrieve all the results in the page as lists
    const[message, setMessage] = useState(''); //this one for checking if there's an issue in server fetch

    const getImages = async() =>{
        
        try
        {
            const response = await MovieDB.get('/configuration',{

            params: {
                api_key: "acea91d2bff1c53e6604e4985b6989e2",
            }
            });
        setImages(response.data.images)
         setMessage('')   
        }
        catch(e)
        {
            setMessage("Error happend while fetching data!")
        }
    }

    useEffect(() => {
        getImages()//starts initally
    },[])
    
    return [getImages,images,message]
}

/*import { useEffect, useState } from "react";
import MovieDB from "../api/MovieDB";

export default () => {
  const [results, setResults] = useState([]); //will make a function to retrieve all the results in the page as lists
  const [message, setMessage] = useState(""); //this one for checking if there's an issue in server fetch

  
  //for handling loading
  const [loading, setLoading] = useState(true);
  
  const getResults = async (moviePage) => {
  
    try {
      const response = await MovieDB.get("/discover/movie", {
        params: {
          api_key: "acea91d2bff1c53e6604e4985b6989e2",
          page: moviePage,
        },
      });

      setLoading(false);
      setResults([...results, ...response.data.results]);
      setMessage("");
      
    } catch (e) {

        setLoading(false);
        console.log("error");
      setMessage("Error happend while fetching data!");
    }
  };

   useEffect(() => {
    getResults(1); //starts initally with page
  }, []);

  return [getResults, results, message];
};
 */