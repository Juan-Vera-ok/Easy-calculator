import React from "react";

export default function Input(props) {
    return (
        
            <input 
            name={props.name} 
            type="text" 
            className="number-input" 
            value={props.value}
            onChange={props.onChange} >
                
            </input>
        
    );
}