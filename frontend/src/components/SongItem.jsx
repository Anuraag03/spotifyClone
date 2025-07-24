import React from 'react'

const SongItem = ({name,image,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt={name}/>
        <p className='font-bold mt-2 mb-1'>{name}</p>       
        <p className='text-sm text-slate-300'>{desc}</p>
        <p className='text-xs text-slate-400'>{id}</p>

    </div>
  )
}

export default SongItem