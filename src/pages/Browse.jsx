import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import MovieListWrapper from '../components/MovieListWrapper';
import MoviePoster from '../components/MoviePoster';
import { useGetALLData } from '../utils/hooks/useGetALLData';

const Browse = () => {
  const movie = useSelector(store => store?.movies?.movieData);
  useGetALLData();
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <div className="browse">
        {movie && Object.keys(movie).length > 0
          ?(
            <>
              <MoviePoster data={Object.values(movie)[0][0]?.node?.entity}/>
               <MovieListWrapper />
            </>
          )
          : <div className="text-white text-center p-4">Loading movies...</div>
        }
      </div>
    </div>
  );
};

export default Browse;
