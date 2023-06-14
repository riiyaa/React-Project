import React from "react";
import "./Navbar.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Forms from "../Forms/Forms";

function Navbar() {
  const openNewBoard = () => {
    console.log("dsjfnsjdnfj");
  };

  return (
    <>
      <div className="w-full flex justify-between items-start">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Platform Launch</h1>
        </div>
        <div className="p-4 flex items-center">
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="py-2 px-4 text-xl font-bold background cursor-pointer">+ Add New Task</label>
          <Forms />
          <BiDotsVerticalRounded onClick={openNewBoard}
            style={{ fontSize: "40px", color: "grey" }} className="svg-path"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
