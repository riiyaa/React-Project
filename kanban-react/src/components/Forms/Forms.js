import React, { useRef } from "react";
import "./Forms.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard,deleteBoard, addBoardColumn } from "../../Content/board/boardSlice";
import { isShowModal } from "../../Content/modal/modalSlice";
import { VscClose } from "react-icons/vsc";


function Forms() {
  const  showModal  = useSelector((state) => state.showModal);
  const boards = useSelector(state => state.boards);
  const boardName = useSelector(state => state.singleBoard);
  const columns = useSelector(state => state.boardColumns);
  const closeRef = useRef();

  const [name, setName] = useState("");
  const [added, setAdded] = useState([]);

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
   const addInput = () =>{
      setAdded(prev => [...prev, {colName:'ABC',task:[{title:'Title',content:'Content'}]}])
   }

   const addValue = (ind,e) => {
     added.splice(ind,1,e.target.value)
   }

   const saveInputs = () => {
    const colIndex = boards.findIndex((elem ,ind) => elem.name == boardName)
    dispatch(addBoardColumn({index:colIndex,array:added}))
   }

  useEffect(() => {
    if(showModal==='add'){
      setName('');
    }
    const i = boards.findIndex((elem ,ind) => elem.name == boardName)
    console.log(boards[i]);
    setAdded(boards[i].columns)
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
                  {boards.map((it,index) => (
                    <option key={index}>{it.name}</option>
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
      {showModal==='addColumn' && (
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
                className="input border-slate-500 w-full max-w-md h-9 outline-none"
                value={boardName}
                onChange={(e) => {
                }}
              />
              <br/>
              <br/>
              <br/>
              <p className="font-bold text-slate-500">Board Columns</p>
              { added.map((add,index) => {
                return <div key={index} className="flex items-center justify-between gap-4 py-2">
                  <input
                    type="text"
                    id="id"
                    placeholder="Board Name"
                    className="input border-slate-500 w-full flex-1 h-9 outline-none"
                    value={add.colName}
                    onChange={(e) => addValue(index,e)}
                  />
                  <label className="flex-01" > <VscClose className="text-2xl stroke-1" /></label>
                </div>
              })

              }
                <div  className="btn block flex items-center themeBackground font-bold minH20 h-9 rounded-3xl mt-2 mb-4" onClick={()=>addInput()}>
                  Add New Column!
                </div>
                <label htmlFor="my_modal_6" onClick={()=>saveInputs()} className="btn bg-slate-400 block flex items-center themeBackground minH20 h-9 rounded-3xl mt-4 mb-2" >
                  Save Changes
                </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Forms;
