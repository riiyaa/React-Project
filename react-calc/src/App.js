import "./App.scss";
import { useState} from "react"

function App() {

const [input, setInput] = useState({
  first:0,
  second:'',
  isOperator:false,
  operator:'',
  firstNum:0,
  isEqual:false,
  secondNum:0
})

const pressNum = (num,isNum) => {
  if(isNum){
    let val = structuredClone(input.first)
    val = String(val) + num
    if(num=='.'){
      if(!input.first.includes('.')){
        setInput(prev => ({...prev,first:val,isEqual:false}))
      }else {return}
    }else{
      if(input.isOperator && !input.isEqual){
        setInput(prev => ({...prev,first:num,isOperator:false }))
      }else if(!input.isOperator && !input.isEqual){
        if(input.first=='0'){
          setInput(prev => ({...prev,first:num}))
        }else{
          setInput(prev => ({...prev,first:val}))
        }
      }else if(input.isEqual){
        setInput(prev => ({...prev,first:num,second:'',isEqual:false}))
      }
    }
  }else{
    const val1 = structuredClone(input.first)
    const val2 = structuredClone(input.first) + num
    if(!input.isOperator){
      if(input.firstNum == 0 && input.operator==''){
        setInput(prev => ({...prev,second:val2,isOperator:true,operator:num,firstNum:val1}))
      }else{
        const fNum = Number(structuredClone(input.firstNum))
        const sNum = Number(structuredClone(input.first))
        if(input.operator=='+'){
          setInput(prev => ({...prev,first:String(fNum+sNum),second:String(fNum + sNum) + num,isOperator:true,operator:num,firstNum:fNum + sNum}))
        }
        if(input.operator=='-'){
          setInput(prev => ({...prev,first:String(fNum-sNum),second:String(fNum - sNum) + num,isOperator:true,operator:num,firstNum:fNum - sNum}))
        }
        if(input.operator=='×'){
          setInput(prev => ({...prev,first:String(fNum*sNum),second:String(fNum * sNum) + num,isOperator:true,operator:num,firstNum:fNum * sNum}))
        }
        if(input.operator=='÷'){
          setInput(prev => ({...prev,first:String(fNum/sNum),second:String(fNum / sNum) + num,isOperator:true,operator:num,firstNum:fNum / sNum}))
        }
        if(input.operator=='%'){
          setInput(prev => ({...prev,first:String(fNum%sNum),second:String(fNum % sNum) + num,isOperator:true,operator:num,firstNum:fNum % sNum}))
        }
      }
    }else{
      setInput(prev => ({...prev,second:val2,isOperator:true,operator:num,firstNum:val1}))
    }
  }
}

const equal = () => {
  let ele = structuredClone(input)
  const fNum = Number(structuredClone(input.firstNum))
  const sNum = Number(structuredClone(input.first))
  const tNum = Number(structuredClone(input.secondNum))
  /// user press enter multiple times
  if(input.second.includes('=')){

    if(ele.operator=='+'){
      setInput(prev => ({...prev,first:String(fNum+tNum),second:String(fNum)+' + '+String(tNum)+' =',isOperator:true,isEqual:true,operator:'+',firstNum:fNum + tNum,secondNum:String(tNum)}))
    }
    if(ele.operator=='-'){
      setInput(prev => ({...prev,first:String(fNum-tNum),second:String(fNum)+' - '+String(tNum)+' =',isOperator:true,isEqual:true,operator:'-',firstNum:fNum - tNum,secondNum:String(tNum)}))
    }
    if(ele.operator=='×'){
      setInput(prev => ({...prev,first:String(fNum*tNum),second:String(fNum)+' × '+String(tNum)+' =',isOperator:true,isEqual:true,operator:'×',firstNum:fNum * tNum,secondNum:String(tNum)}))
    }
    if(ele.operator=='÷'){
      setInput(prev => ({...prev,first:String(fNum/tNum),second:String(fNum)+' ÷ '+String(tNum)+' =',isOperator:true,isEqual:true,operator:'÷',firstNum:fNum / tNum,secondNum:String(tNum)}))
    }
    if(ele.operator=='%'){
      setInput(prev => ({...prev,first:String(fNum%tNum),second:String(fNum)+' % '+String(tNum)+' =',isOperator:true,isEqual:true,operator:'%',firstNum:fNum % tNum,secondNum:String(tNum)}))
    }

  }
  //// user press enter first time
  else if(!input.second.includes('=') && input.operator!=''){

    if(ele.operator=='+'){
      setInput(prev => ({...prev,first:String(fNum+sNum),second:String(fNum)+' + '+String(sNum)+' =',isOperator:true,isEqual:true,operator:'+',firstNum:fNum + sNum,secondNum:String(sNum)}))
    }
    if(ele.operator=='-'){
      setInput(prev => ({...prev,first:String(fNum-sNum),second:String(fNum)+' - '+String(sNum)+' =',isOperator:true,isEqual:true,operator:'-',firstNum:fNum - sNum,secondNum:String(sNum)}))
    }
    if(ele.operator=='×'){
      setInput(prev => ({...prev,first:String(fNum*sNum),second:String(fNum)+' × '+String(sNum)+' =',isOperator:true,isEqual:true,operator:'×',firstNum:fNum * sNum,secondNum:String(sNum)}))
    }
    if(ele.operator=='÷'){
      setInput(prev => ({...prev,first:String(fNum/sNum),second:String(fNum)+' ÷ '+String(sNum)+' =',isOperator:true,isEqual:true,operator:'÷',firstNum:fNum / sNum,secondNum:String(sNum)}))
    }
    if(ele.operator=='%'){
      setInput(prev => ({...prev,first:String(fNum%sNum),second:String(fNum)+' % '+String(sNum)+' =',isOperator:true,isEqual:true,operator:'%',firstNum:fNum % sNum,secondNum:String(sNum)}))
    }

  }
}

const backSpace = () =>{
  if(input.first.length == 0){
    setInput(prev => ({...prev , first:0}))
  }else{
    setInput(prev => ({...prev , first:input.first.slice(0,-1)}))
  }
}

const clearAll = (bool) => {
  if(bool){
    setInput(prev => ({...prev, 
    first:0,
    second:'',
    isOperator:false,
    operator:'',
    firstNum:0,
    isEqual:false,
    secondNum:0}))
  }else{
    setInput(prev => ({...prev, 
      first:0}))
  }
}

  return (

    <div>
      <div className="section">
        <div className="container">
          <div className="heading">
            <h1>Windows Calculator</h1>
          </div>
          <div className="main-box f1">
          <div className="user_input_group group">
              <div className="user_input" type="text">
                {input.second}
              </div>
            </div>
            <div className="result_input_group group">
              <div className="result_input" type="text">
                {input.first}
              </div>
            </div>
            <div className="space"></div>
            <div className="operator">
              <div className="first_line">
                <button className="btn color" type="button" onClick={()=> clearAll(false)}>
                  CE
                </button>
                <button className="btn color" type="button" onClick={()=> clearAll(true)}>
                  C
                </button>
                <button className="btn color" type="button" onClick={()=> backSpace()}>
                  ⌫
                </button>
                <button className="btn op color" type="button" onClick={()=> pressNum('÷',false)}>
                  ÷
                </button>
              </div>
              <div className="second_line">
                <button className="btn" type="button" onClick={()=> pressNum('7',true)}>
                  7
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('8',true)}>
                  8
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('9',true)}>
                  9
                </button>
                <button className="btn op color" type="button" onClick={()=> pressNum('×',false)}>
                  ×
                </button>
              </div>
              <div className="third_line">
                <button className="btn" type="button" onClick={()=> pressNum('4',true)}>
                  4
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('5',true)}>
                  5
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('6',true)}>
                  6
                </button>
                <button className="btn op color" type="button" onClick={()=> pressNum('-',false)}>
                  -
                </button>
              </div>
              <div className="forth_line">
                <button className="btn" type="button" onClick={()=> pressNum('1',true)}>
                  1
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('2',true)}>
                  2
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('3',true)}>
                  3
                </button>
                <button className="btn op color" type="button" onClick={()=> pressNum('+',false)}>
                  +
                </button>
              </div>
              <div className="fifth_line">
                <button className="btn op color" type="button" onClick={()=> pressNum('%',false)}>
                  %
                </button>
                <button className="btn" type="button" onClick={()=> pressNum('0',true)}>
                  0
                </button>
                <button className="btn" type="button" onClick={()=>pressNum('.',true)}>
                  .
                </button>
                <button className="btn equal" type="button" onClick={()=>equal()}>
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
