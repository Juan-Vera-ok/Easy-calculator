import React from "react"
import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import Result from "./Result"
import Select from "./Select"
export default function Calculator() {
    
    return (
        <div className="calculator-root">
            <div className="calculator-section">
                <Input />
                <Select></Select>
                <Input />
                <Button >=</Button>
                <Result />
            </div>





        </div>
    )
}