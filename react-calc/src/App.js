import "./App.scss";
import { useState} from "react"

function App() {

const [input, setInput] = useState({
  first:0,
  second:'',
  isOperator:false,
  operator:'',
  firstNum:0,
  secondNum:0,
})

const pressNum = (num,isNum) => {
  if(isNum){
    let val = structuredClone(input.first)
    val = String(val) + num
    if(num=='.'){
      if(!input.first.includes('.')){
        setInput(prev => ({...prev,first:val}))
      }else {return}
    }else{
      if(input.isOperator){
        setInput(prev => ({...prev,first:num,isOperator:false }))
      }else if(!input.isOperator){
        if(input.first=='0'){
          setInput(prev => ({...prev,first:num}))
        }else{
          setInput(prev => ({...prev,first:val}))
        }
      }
    }
  }else{
    const val1 = structuredClone(input.first)
    const val2 = structuredClone(input.first) + num
    if(!input.isOperator){
      if(input.firstNum == 0 && input.operator==''){
        console.log('called');
        setInput(prev => ({...prev,second:val2,isOperator:true,operator:num,firstNum:val1}))
      }else{
        console.log('called else');
        const fNum = Number(structuredClone(input.firstNum))
        const sNum = Number(structuredClone(input.first))
        console.log('num',fNum,sNum,input.operator);
        if(input.operator=='+'){
          setInput(prev => ({...prev,first:String(fNum+sNum),second:(fNum + sNum) + num,isOperator:true,operator:num,firstNum:fNum + sNum}))
        }
        if(input.operator=='-'){
          setInput(prev => ({...prev,first:String(fNum-sNum),second:(fNum - sNum) + num,isOperator:true,operator:num,firstNum:fNum - sNum}))
        }
        if(input.operator=='×'){
          setInput(prev => ({...prev,first:String(fNum*sNum),second:(fNum * sNum) + num,isOperator:true,operator:num,firstNum:fNum * sNum}))
        }
        if(input.operator=='÷'){
          setInput(prev => ({...prev,first:String(fNum/sNum),second:(fNum / sNum) + num,isOperator:true,operator:num,firstNum:fNum / sNum}))
        }
      }
    }else{
      setInput(prev => ({...prev,second:val2,isOperator:true,operator:num,firstNum:val1}))
    }
  }
}

const equal = () => {
  if(input.second.includes('=')){
    
  }else if(!input.second.includes('=') && input.operator!=''){
    let ele = structuredClone(input)
    // if(input.operator=='+'){
    //   setInput(prev => ({...prev,first:String(fNum+sNum),second:(fNum + sNum) + num,isOperator:true,operator:num,firstNum:fNum + sNum}))
    // }
    // if(input.operator=='-'){
    //   setInput(prev => ({...prev,first:String(fNum-sNum),second:(fNum - sNum) + num,isOperator:true,operator:num,firstNum:fNum - sNum}))
    // }
    // if(input.operator=='×'){
    //   setInput(prev => ({...prev,first:String(fNum*sNum),second:(fNum * sNum) + num,isOperator:true,operator:num,firstNum:fNum * sNum}))
    // }
    // if(input.operator=='÷'){
    //   setInput(prev => ({...prev,first:String(fNum/sNum),second:(fNum / sNum) + num,isOperator:true,operator:num,firstNum:fNum / sNum}))
    // }
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
                <button className="btn color" type="button">
                  CE
                </button>
                <button className="btn color" type="button">
                  C
                </button>
                <button className="btn color" type="button">
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
