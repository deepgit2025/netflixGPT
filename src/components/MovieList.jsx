import React from 'react'

const MovieList = ({data}) => {
    if (!Array.isArray(data)) {
        console.error('Expected array, got:', data);
        return null; // or return a fallback UI
      }
    return (
        <div className='flex gap-10 overflow-x-auto no-scrollbar relative'>
            {data?.map(item=>{
                return (
                    <div key={item?.node?.entity?.id} className=''>
                        <div className='h-[150px] min-w-[150px]'>
                            <img src={item?.node?.entity?.primaryImage?.url} alt="" className='h-full w-full' />
                        </div>
                        <div className='text-slate-100 text-[16px] text-center'>{item?.node?.entity?.titleText.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList
