import { useEffect, useState } from "react";
import { movieoptions, movieurl } from "../constant";

export const fetchMovieData = async (movieName, movieCount)=>{
   // const [data, setData] = useState({}); //cant call hook inside a normal js function, only in component and custom hooks
    try {
        const response = await fetch( movieurl.replace('{movieName}', movieName).replace('{movieLimit}',movieCount), movieoptions);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
    return [];
}