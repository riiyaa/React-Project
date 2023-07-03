import { useState } from 'react';
import style from './App.module.scss';



function App() {

  const [table, setTable] = useState({
    rowInitial:['riya'],
    isDisable:true
  })

  const addRow = () =>{
    // let row = sessionStorage.getItem('row') ? sessionStorage.getItem('row') : 0
    // console.log(table.rowCount,table.rowCount++);
      setTable(prev => ({...prev,rowInitial : [...prev.rowInitial, "riya"]}))
      // sessionStorage.setItem('row', row);  
      console.log(table);
  }

  const editRow = () =>{
    setTable(prev => ({
      ...prev,
      isDisable : false
    }))
  }

  const save = (i,e) =>{
    const val = structuredClone(table.rowInitial);
    val[i] = e.target.value;
    setTable(prev => ({...prev,rowInitial : val}))
  }

  const saveChanges = (i,e) =>{
    console.log(table);
    setTable(prev => ({
      ...prev,
      isDisable : true
    }))
  }


  return (
    <>
    <div className={`${style.flex} ${style['justify-content-center']}`}>
      <button className={style.btn} onClick={()=>addRow()}> Add row</button>
      {table.isDisable && (<button className={style.btn} onClick={() => editRow()}> Edit Row Name</button>)}
      {!table.isDisable && (<button className={style.btn} onClick={() => saveChanges()}> Save Changes</button>)}
    </div>
    <br></br>
    <br></br>
    <div className={`${style['text-center']}`}>
      <table border={1} style={{borderCollapse:'collapse'}}>
        <tbody>
          {table.rowInitial.map((data,index)=>{
            return <tr key={index}><td><input defaultValue={data} disabled={table.isDisable} onChange={(e)=> save(index,e)}/></td></tr>
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
