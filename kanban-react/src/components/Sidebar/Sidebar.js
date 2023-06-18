import { useSelector } from "react-redux"
import "./Sidebar.scss"
import React from 'react'
import logo from '../../assets/logo-mobile.svg'

function Sidebar() {
  const boards = useSelector(state => state.boards);
  console.log(boards);
  return (
    <>
    <div className="w-1/4 rounded-tr-xl rounded-br-xl h-screen">
      <div className="">
        <div className="flex items-center gap-1 mb-10 p-4">
          <img src={logo} alt=" Logo " ></img>
          <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">kanban</h3>
        </div>
        <h2 className="font-bold py-4 px-8"> ALL BOARDS </h2>
          {boards.map((it, index) => {
            return <div key={index} className="cursor-pointer py-2 pl-8 pr-2 my-2 bg-purple-400 background1 border-radius20"><h2 className="w-full h-6 text-ellipsis overflow-hidden" key={index} >{it}</h2></div>
          })}
      </div>  
    </div> 
    </>
  )
}

export default Sidebar
