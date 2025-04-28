 import { fetchMovieData } from "../helpers/fetchMovieData";
 import { useDispatch } from 'react-redux';
 import { addMovieDetails} from '../slices/movieSlice'
 import { moviesSuggestions } from "../movieSuggestions";
 import { useEffect } from "react";
export const useGetALLData = ()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        const getAllData = async () => {
          for (const suggestion of moviesSuggestions) {
            if (!suggestion) continue;
            const movieData = await fetchMovieData(suggestion.movie, suggestion.limit);
            if (movieData?.data?.mainSearch?.edges) {
              dispatch(addMovieDetails({ 
                movieName: suggestion.movie, 
                movie: movieData.data.mainSearch.edges 
              }));
            }
          }
        };
        getAllData();
    }, [dispatch]);
}