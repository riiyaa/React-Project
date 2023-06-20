import React, { useRef } from "react";
import "./Forms.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBoard,deleteBoard } from "../../Content/board/boardSlice";
import { isShowModal } from "../../Content/modal/modalSlice";

function Forms() {
  const  showModal  = useSelector((state) => state.showModal);
  const boards = useSelector(state => state.boards);
  const closeRef = useRef();

  useEffect(() => {
    setName('')
    console.log(name);
  }, []);

  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const insertBoard = (event) => {
    if (name !== "") {
      dispatch(addBoard(name));
      dispatch(isShowModal(''));
      closeRef.current.click();
    }
  };

  const removeBoard = () => {
    if (name !== "") {
      dispatch(deleteBoard(name));
      dispatch(isShowModal(''));
      closeRef.current.click();
    }
  }

  useEffect(() => {
    if(showModal=='add'){
      setName('');
    }
  }, [showModal])
  

  return (
    <>
      {showModal === "add" && (
        <div>
          <input
            type="checkbox"
            id="my_modal_6"
            className="modal-toggle"
            ref={closeRef}
          />
          <div className="modal">
            <div className="modal-box">
              <h1 className="font-bold text-2xl">Create New Board</h1>
              <p className="py-4">This modal works with a hidden checkbox!</p>
              <input
                type="text"
                placeholder="Board Name"
                className="input border-slate-500 w-full max-w-xs"
                value={name}
                onChange={(e) => {
                  setName(e?.target.value);
                }}
              />
              <div className="modal-action flex justify-between">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
                <label className="btn bg-slate-400" onClick={(event)=>insertBoard(event)}>
                  Submit
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal === "delete" && (
        <div>
          <input
            type="checkbox"
            id="my_modal_6"
            className="modal-toggle"
            ref={closeRef}
          />
          <div className="modal">
            <div className="modal-box">
              <h1 className="font-bold text-2xl">Delete Your board</h1>
              <p className="py-4">This modal works with a hidden checkbox!</p>
              <div className="form-control w-full max-w-xs">
                <select className="select select-bordered" defaultValue={'DEFAULT'} onChange={(event)=>{setName(event?.target.value)}}>
                  <option value="DEFAULT" disabled>
                    Pick one
                  </option>
                  {boards.map((season,index) => (
                    <option key={index}>{season}</option>
                  ))}
                </select>
              </div>
              <div className="modal-action flex justify-between">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
                <label className="btn bg-slate-400" onClick={removeBoard}>
                  Submit
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Forms;
