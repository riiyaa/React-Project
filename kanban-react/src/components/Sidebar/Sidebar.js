import { useSelector } from "react-redux"
import "./Sidebar.scss"
import React from 'react'

function Sidebar() {
  const boards = useSelector(state => state.boards);
  return (
    <>
    <div className="w-1/4 bg-slate-600 rounded-tr-xl rounded-br-xl h-screen">
      <div className="p-4">
          {boards.map((it, index) => {
            return <h2 key={index} >{it}</h2>
          })}
      </div>  
    </div> 
    </>
  )
}

export default Sidebar
