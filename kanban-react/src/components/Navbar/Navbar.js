import React from "react";
import "./Navbar.scss";
// import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTrash3Fill } from "react-icons/bs";
import Forms from "../Forms/Forms";
import { useDispatch } from "react-redux";
import { isShowModal } from "../../Content/board/boardSlice";

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
          <label htmlFor="my_modal_6" className="py-2 px-4 text-xl font-bold background cursor-pointer mr-3">+ Add New Task</label>
          <Forms />
          <BsTrash3Fill onClick={()=> openNewBoard('delete')} style={{ fontSize: "30px", color: "grey" }} className="svg-path fill-black"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
