import React,{useContext} from 'react'
import { assets, songsData } from '../assets/assets'
import {PlayerContext} from '../context/PlayerContextInstance'
const Player = () => {

    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong } = useContext(PlayerContext);


  return (
    <div className='h-[10%] bg-black flex justify-between items-center p-4 text-white'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt=''></img>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img src={assets.shuffle_icon} alt='' className='w-4 cursor-pointer'/>
                <img onClick={previous} src={assets.prev_icon} alt='' className='w-4 cursor-pointer'/>
                {!playStatus && (
                  <img onClick={play} src={assets.play_icon} alt='' className='w-4 cursor-pointer'/>
                )}
                {playStatus && (
                  <img onClick={pause} src={assets.pause_icon} alt='' className='w-4 cursor-pointer'/>
                )}
                <img onClick={next} src={assets.next_icon} alt='' className='w-4 cursor-pointer'/>
                <img src={assets.loop_icon} alt='' className='w-4 cursor-pointer'/>
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-20 bg-green-800 rounded-full' />


                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>


            </div>

        </div>
        <div className='hidden lg:flex items-center gap-3 opacity-75'>
            <img src={assets.plays_icon} alt='' className='w-4 cursor-pointer'/>
            <img src={assets.mic_icon} alt='' className='w-4 cursor-pointer'/>
            <img src={assets.queue_icon} alt='' className='w-4 cursor-pointer'/>
            <img src={assets.speaker_icon} alt='' className='w-4 cursor-pointer'/>
            <img src={assets.volume_icon} alt='' className='w-4 cursor-pointer'/>
            <div className='w-20 h-1 bg-slate-50 rounded'>

            </div>
            <img src={assets.mini_player_icon} alt='' className='w-4 cursor-poinnter'/>
            <img src={assets.zoom_icon} alt='' className='w-4 cursor-pointer'/>
        </div>


    </div>
  )
}

export default Player