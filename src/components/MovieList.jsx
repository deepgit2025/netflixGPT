import React from 'react'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const movies = useSelector(store=>store.movies.movieData);
    return (
        <div>
            {movies?.map(item=>{
                return (
                    <div key={item?.node?.entity?.id}>
                        <img src={item?.node?.entity?.primaryImage.url} alt="" className='h-[100px] w-[100px]' />
                        <div className='text-blue-950 text-[24px]'>{item?.node?.entity?.titleText.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList
