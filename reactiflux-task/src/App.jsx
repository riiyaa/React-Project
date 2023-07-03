import { useState } from 'react';
import style from './App.module.scss';



function App() {

  const [table, setTable] = useState({
    rowInitial:[{
      rowName:'',
      columns:['']
    }],
    isDisable:true
  })

  const addRow = () =>{
    // let row = sessionStorage.getItem('row') ? sessionStorage.getItem('row') : 0
    const val = structuredClone(table.rowInitial)
    val.push({
      rowName:'',
      columns:val[0]?.columns
    })
      setTable(prev => ({...prev,rowInitial : val}))
      // columns:[...prev.rowInitial.columns,'']  
  }

  const addCol = () =>{
    const val = structuredClone(table.rowInitial);
    val.map((res)=>{
      res.columns.push('ffffffv')
    })
    setTable(prev => ({...prev,rowInitial:val}))
  }

  const editRow = () =>{
    setTable(prev => ({
      ...prev,
      isDisable : false
    }))
  }

  const save = (i,e) =>{
    const val = structuredClone(table.rowInitial);
    val[i].rowName = e.target.value;
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
      <button className={style.btn} onClick={()=>addCol()}> Add Column</button>
      {table.isDisable && (<button className={style.btn} onClick={() => editRow()}> Edit Row Name</button>)}
      {!table.isDisable && (<button className={style.btn} onClick={() => saveChanges()}> Save Changes</button>)}
    </div>
    <br></br>
    <br></br>
    <div className={`${style['text-center']}`}>
      <table border={1} style={{borderCollapse:'collapse'}}>
        <tbody>
          {table.rowInitial.map((data,index)=>{
            return <tr key={index}><input defaultValue={data.rowName} disabled={table.isDisable} onChange={(e)=> save(index,e)}/>
            {data.columns.map((res,ind)=>{
              return <td key={ind}><input defaultValue={res} disabled={table.isDisable}/></td>
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
