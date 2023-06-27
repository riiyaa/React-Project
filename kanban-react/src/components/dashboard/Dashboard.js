import { useSelector } from "react-redux";
import "./Dashboard.scss"
import React from 'react'
import Column from "../Column/Column";


function Dashboard() {

  const boardName = useSelector(state => state.singleBoard);

  return (
    <div className=" bg-slate-200 h-full p-8">
        <h1 className="text-2xl font-bold mb-3">{boardName}</h1>
        <div className="flex items-center">
            { boardName != '' && (
              <Column />
            )}
        </div>
    </div>
  )
}

export default Dashboard
