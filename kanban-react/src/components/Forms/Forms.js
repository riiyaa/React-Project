import React, { useRef } from "react";
import "./Forms.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBoard,deleteBoard } from "../../Content/board/boardSlice";
import { isShowModal } from "../../Content/modal/modalSlice";

function Forms() {
  const  showModal  = useSelector((state) => state.showModal);
  const boards = useSelector(state => state.boards);
  const boardName = useSelector(state => state.singleBoard);
  const closeRef = useRef();

  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const insertBoard = () => {
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
    if(showModal==='add'){
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
      {showModal==='addColumn' && 
      <div>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        ref={closeRef}
      />
      <div className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-2xl mb-2">Edit Board</h1>
          <p className="font-bold text-slate-500">Board Name</p>
          <input
            type="text"
            placeholder="Board Name"
            className="input border-slate-500 w-full max-w-xs h-9 outline-none"
            value={boardName}
            onChange={(e) => {
              
            }}
          />
          <br/>
          <br/>
          <br/>
          <p className="font-bold text-slate-500">Board Columns</p>
          <div>
            <input
              type="text"
              placeholder="Board Name"
              className="input border-slate-500 w-full max-w-xs h-9 outline-none"
              onChange={(e) => {
                
              }}
            />
          </div>
            <div  className="btn block flex items-center themeBackground font-bold minH20 h-8 rounded-3xl mt-2 mx-3 mb-4">
              Add New Column!
            </div>
            <label htmlFor="my_modal_6" className="btn bg-slate-400 block flex items-center themeBackground minH20 h-8 rounded-3xl mt-4 mx-3 mb-2" >
              Save Changes
            </label>
        </div>
      </div>
    </div>
      }
    </>
  );
}

export default Forms;
