import React from 'react'

const MoviePoster = ({data}) => {
  return (!data) ? (<h1 className='text-slate-100 text-[24px]'>LOading</h1>) :(
    <div className='h-[90vh] w-full relative flex justify-center items-end'>
        <img src={data.primaryImage.url} className='start-0 top-0 h-full w-full absolute z-0' alt={data?.primaryImage?.id} />
    </div>
  )
}

export default MoviePoster
