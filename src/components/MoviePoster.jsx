import React from 'react'

const MoviePoster = ({data}) => {
    console.log(data);
  return (
    <div className='h-[90vh] w-full relative flex justify-center items-end'>
        <img src={data.primaryImage.url} className='start-0 top-0 h-full w-full absolute z-0' alt={data?.primaryImage?.id} />
        <div className='text-slate-950 text-9xl uppercase z-10 mb-[10%]'>{data?.titleText?.text}</div>
    </div>
  )
}

export default MoviePoster
