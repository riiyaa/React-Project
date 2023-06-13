import React from 'react';
import './Navbar.scss';
import { BiDotsVerticalRounded } from "react-icons/bi";

function Navbar() {
  const openNewBoard=()=>{
    console.log('dsjfnsjdnfj');
  }
  
  return (
    <>
    <div className='flex justify-between'>
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>Platform Launch</h1>
        </div>
        <div className='p-4 flex items-center'>
            <button className='py-2 px-4 text-xl font-bold background cursor-pointer'>+ Add New Task</button>
            <BiDotsVerticalRounded onClick={openNewBoard} style={{fontSize:'40px',color:'grey'}} className='svg-path'/>
        </div>
    </div> 
    </>
  )
}

export default Navbar

