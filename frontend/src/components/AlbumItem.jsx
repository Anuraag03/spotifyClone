import React from 'react'
import {useNavigate} from 'react-router-dom'
const AlbumItem = ({ image, name, desc, id }) => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)}className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt={name}/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-sm text-slate-300'>{desc}</p>
    </div>
  )
}

export default AlbumItem