import { useState } from 'react';
import style from './App.module.scss';



function App() {

  const [table, setTable] = useState({
    rowInitial:[['']],
    initial:[['']],
    isDisable:true
  })

  const addRow = () =>{
    // let row = sessionStorage.getItem('row') ? sessionStorage.getItem('row') : 0
    // const val = structuredClone(table.rowInitial)
    // val.push({
    //   rowName:'',
    //   columns:val[0]?.columns
    // })
    const count = table.rowInitial[0]?.length ?? 1
    let arr = new Array(count)
    setTable(prev => ({...prev,rowInitial : [...prev.rowInitial, arr.fill(1).map(() => '')],initial:[...prev.initial, arr.fill(1).map(() => '')]}))
  }

  const addCol = () =>{
    const val = structuredClone(table.rowInitial);
    val.map((res)=>{
      res.push('')
    })
    setTable(prev => ({...prev,rowInitial:val,initial:val}))
  }

  const editRow = () =>{
    setTable(prev => ({
      ...prev,
      isDisable : false
    }))
  }

  const save = (i,e,colI) =>{
    const changeVal = structuredClone(table.rowInitial);
    changeVal[i][colI] = e.target.value;
    setTable(prev => ({...prev,rowInitial : changeVal}))
  }

  const saveChanges = () =>{
    setTable(prev => ({...prev,isDisable:true,initial:[...prev.rowInitial]}))
  }

  const cancel = () =>{
    setTable(prev => ({...prev,isDisable:true,rowInitial:[...prev.initial]}))
  }
  return (
    <>
    <div className={`${style.flex} ${style['justify-content-center']}`}>
      <button className={style.btn} onClick={()=>addRow()} disabled={!table.isDisable}> Add row</button>
      <button className={style.btn} onClick={()=>addCol()} disabled={!table.isDisable}> Add Column</button>
      {table.isDisable && (<button className={style.btn} onClick={() => editRow()}> Edit Row Name</button>)}
      {!table.isDisable && (<button className={style.btn} onClick={() => saveChanges()}> Save Changes</button>)}
      {!table.isDisable && (<button className={style.btn} onClick={() => cancel()}> Cancel changes</button>)}
    </div>
    <br></br>
    <br></br>
    <div className={`${style['text-center']}`}>
      <table border={1} style={{borderCollapse:'collapse'}}>
        <tbody>
          {table.rowInitial.map((data,index)=>{
            return <tr key={index}>
            {data.map((col, colIndex) => {
              return <td key={colIndex}><input defaultValue={col} value={col} disabled={table.isDisable} onChange={(e)=> save(index,e,colIndex)}/>
              </td>
            })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
