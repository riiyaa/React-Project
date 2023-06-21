import { useDispatch } from "react-redux";
import "./Column.scss"
import React from 'react'
import { isShowModal } from "../../Content/modal/modalSlice";
import Forms from "../Forms/Forms";

function Column() {

  const dispatch = useDispatch(); 

  const showAddColumnModal=()=>{
    dispatch(isShowModal('addColumn'))
  }

  return (
    <div>
      <label htmlFor="my_modal_6" className="column" onClick={showAddColumnModal}>
        <span className="text-base text-slate-500 font-bold">+ Add Column </span>
      </label>
      <Forms />
    </div>
  )
}

export default Column
