import React,{useState} from 'react';
import "./css/calculator.css";

function Calculator() {
    const [ans, setAns] = useState('');
    const divide =()=>{
        if(ans!=='' && ans.slice(-1)!=='+' && ans.slice(-1)!=='-' && ans.slice(-1)!=='*' && ans.slice(-1)!=='/')
        setAns(ans+"/");
    }
    const multiply =()=>{
        if(ans!=='' && ans.slice(-1)!=='+' && ans.slice(-1)!=='-' && ans.slice(-1)!=='*' && ans.slice(-1)!=='/')
        setAns(ans+"*");
    }
    const subtract =()=>{
        if(ans!=='' && ans.slice(-1)!=='+' && ans.slice(-1)!=='-' && ans.slice(-1)!=='*' && ans.slice(-1)!=='/')
        setAns(ans+"-");
    }
    const add =()=>{
        if(ans!=='' && ans.slice(-1)!=='+' && ans.slice(-1)!=='-' && ans.slice(-1)!=='*' && ans.slice(-1)!=='/')
        setAns(ans+"+");
    }
    const calc=()=>{
        if(ans!=='' && ans.slice(-1)!=='+' && ans.slice(-1)!=='-' && ans.slice(-1)!=='*' && ans.slice(-1)!=='/')
        setAns(String(eval(ans)));
    }
    return (
        <div id="calculator">
        <h1>Calculator</h1><br/>
            <input id="input" value={ans}/><br/>
            <div id="btns">
            <center>
                <button className="other" onClick={()=>setAns('')}>C</button>
                <button className="operator" onClick={divide}>/</button>
                <button className="operator" onClick={multiply}>x</button>
                <button className="other" onClick={()=>setAns(ans.substr(0,ans.length-1))}>DLT</button><br/>
                <button onClick={()=>setAns(ans+'7')}>7</button>
                <button onClick={()=>setAns(ans+'8')}>8</button>
                <button onClick={()=>setAns(ans+'9')}>9</button>
                <button className="operator" onClick={subtract}>-</button><br/>
                <button onClick={()=>setAns(ans+'4')}>4</button>
                <button onClick={()=>setAns(ans+'5')}>5</button>
                <button onClick={()=>setAns(ans+'6')}>6</button>
                <button className="operator" onClick={add}>+</button><br/>
                <button onClick={()=>setAns(ans+'1')}>1</button>
                <button onClick={()=>setAns(ans+'2')}>2</button>
                <button onClick={()=>setAns(ans+'3')}>3</button>
                <button onClick={()=>setAns(ans+'0')}>0</button><br/>
                <button className="other" onClick={calc}>=</button>
                </center>
            </div>
        </div>
    )
}

export default Calculator;
