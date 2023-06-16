import React from "react";
import "./Navbar.scss";
// import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTrash3Fill } from "react-icons/bs";
import Forms from "../Forms/Forms";
import { useDispatch } from "react-redux";
import { isShowModal } from "../../Content/modal/modalSlice";

function Navbar() {

  const dispatch = useDispatch(); 

  const openNewBoard = (res) => {
    dispatch(isShowModal(res));
  };

  return (
    <>
      <div className="w-full  h-20 flex justify-between items-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Platform Launch</h1>
        </div>
        <div className="p-4 flex items-center">
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="py-2 px-4 text-xl font-bold background cursor-pointer mr-3" onClick={()=>openNewBoard('add')}>+ Add New Task</label>
          <label htmlFor="my_modal_6" onClick={()=>openNewBoard('delete')}><BsTrash3Fill style={{ fontSize: "30px", color: "grey" }} className="svg-path fill-black"/></label>
          <Forms />
        </div>
      </div>
    </>
  );
}

export default Navbar;
