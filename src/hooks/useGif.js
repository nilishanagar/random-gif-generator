import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif = (tag) => {
 //yha tag input me aaya hoga uske base pr hi btaungi konsa url use krna h

  const [gif, setGif] = useState(" ");
  const [loading,setLoading]=useState("false");

  async function fetchData(tag) {
    setLoading(true);
   
    //yha tag ka support available h pehle se api me
    const { data } = await axios.get(tag ? `${url}&tag=${tag}`:url );
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
    //axios also return promise
  }

  useEffect(() => {
    fetchData("car");
  }, []);
 return {gif,loading,fetchData}; 
} 
export default useGif;
