import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData, assets } from '../assets/assets'

const DisplayAlbum = () => {
    const {id} = useParams()
    const albumData = albumsData[id];
    if (!albumData) {
      return <div className='text-white p-8'>Album not found.</div>;
    }

  return (
    <div>
        <NavBar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img src={albumData.image} alt={albumData.name} className='w-[200px] h-[200px] rounded-lg' />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
            </div>
        </div>
        <div className='grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="Clock Icon" />
        </div>
        <hr/>
        {
            songsData.map((item,index)=>(
                <div className='grid grid-cols-4 gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer' key={index}>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='w-10 inline mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{item.date}</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }

    </div>
  )
}

export default DisplayAlbum