import React from "react"
import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import Result from "./Result"
import Select from "./Select"
export default function Calculator() {
    const [result, setResult] = useState("")
    const [operator, setOperator] = useState('')
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const handleInputs = e => {
        if (e.target.name === "input1") {
            const num1 = parseInt(e.target.value)
            setInput1(num1)
        }
        if (e.target.name === "input2") {
            const num2 = parseInt(e.target.value)
            setInput2(num2)
        }
    }

    const handleOperator = (e) => {
        const selectedOperator = e.target.value;
        setOperator(selectedOperator);
        console.log(selectedOperator);
        if(selectedOperator===""){
            setResult("")
            setInput1("")
            setInput2("")
        } // Muestra el operador seleccionado
    };

    const calculate = () => {
        if (operator === '+') {
            setResult(Number(input1) + Number(input2))
        }
        if (operator === '-') {
            setResult(Number(input1) - Number(input2))
        }
        if (operator === '*') {
            setResult(Number(input1) * Number(input2))
        }
        if (operator === '/') {
            setResult(Number(input1) / Number(input2))
        }
        console.log(input1, input2, operator)
        console.log(result)
        setInput1("");
        setInput2("");
        
    }

    return (
        <div className="calculator-root">
            <div className="calculator-section">
                <Input name="input1" value={input1} onChange={handleInputs}/>
                <Select onChange={handleOperator}></Select>
                <Input name="input2" value={input2} onChange={handleInputs}/>
                <Button onClick={calculate}>=</Button>
                <Result result={result} />
            </div>
        </div>
    )
}