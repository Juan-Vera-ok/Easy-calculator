import React from "react";

export default function Select(props){
    return (
        <select id="operator" onChange={props.onChange}>
            <option value=""></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
    );
}