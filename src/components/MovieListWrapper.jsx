import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieListWrapper = () => {
  const movies = useSelector(store=>store.movies.movieData);
  const moviesList =  Object.entries(movies);
  return (!movies)? <h1>loading</h1> :(
    <div className='flex flex-col gap-[32px]'>
        {moviesList?.map(item=>{
            const movie = item[1];
            return (movie.length <=0)?<></> :(
                <div className='px-[24px] relative top-[-100px]' key={item[0]}>
                    <div className='text-[32px] text-slate-100 font-bold mb-[12px]'>{item[0]}</div>
                    <MovieList data={movie}/>
                </div>
            )
        })}
    </div>
  )
}

export default MovieListWrapper
