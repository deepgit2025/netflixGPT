import React from 'react'
import Header from '../components/Header';
import { useFetchMovieData } from '../utils/hooks/useFetchMovieData';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieDetails } from '../utils/slices/movieSlice';
import MoviePoster from '../components/MoviePoster';
import MovieList from '../components/MovieList';
const Browse = () => {
  const dispatch = useDispatch();
 // let user = useSelector(store=>store?.user?.userData)
  let movie = useSelector(store=>store?.movies?.movieData)
  const movieData = useFetchMovieData('Border','10');
  !movie && movieData?.data && dispatch(addMovieDetails(movieData?.data?.mainSearch?.edges));
  return (
    <div className='w-full min-h-screen bg-black'>
      <Header/>
      <div className="browse">
        {movie && <MoviePoster data={movie[0]?.node?.entity}/>}
        {/* <MovieList/> */}
      </div>
    </div>
  )
}

export default Browse;
