import { useEffect, useState } from "react";
import { movieoptions, movieurl } from "../constant";

export const useFetchMovieData = (movieName, movieCount)=>{
    const [data, setData] = useState({});
    async function getMovieData(){
        try {
            const response = await fetch( movieurl.replace('{movieName}', movieName).replace('{movieLimit}',movieCount), movieoptions);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error(error);
        }
    } 
    useEffect(()=>{
      getMovieData();
    },[])
    return data;
}