import React, { useRef } from "react";
import "./Forms.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBoard,deleteBoard } from "../../Content/board/boardSlice";

function Forms() {
  const { showModal } = useSelector((state) => state);
  const boards = useSelector(state => state.boards);
  const closeRef = useRef();

  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const insertBoard = () => {
    if (name !== "") {
      dispatch(addBoard(name));
      setName("");
      closeRef.current.click();
    }
  };

  const removeBoard = () => {
    if (name !== "") {
      dispatch(deleteBoard(name));
      setName("");
      closeRef.current.click();
    }
  }

  useEffect(() => {}, []);
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
                onChange={(e) => {
                  setName(e?.target.value);
                }}
              />
              <div className="modal-action flex justify-between">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
                <label className="btn bg-slate-400" onClick={insertBoard}>
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
