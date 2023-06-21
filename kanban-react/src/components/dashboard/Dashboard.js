import { useSelector } from "react-redux";
import "./Dashboard.scss"
import React from 'react'

function Dashboard() {

  const boardName = useSelector(state => state.singleBoard);

  return (
    <div className=" bg-slate-200 h-full p-10">
        <h1 className="text-2xl font-bold">{boardName}</h1>

        
    </div>
  )
}

export default Dashboard
