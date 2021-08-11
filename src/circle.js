import React from 'react';
export default function Circle(props){
    return (<div className="col">
        <h2 className="count">{props.data.count}</h2>
        <button className = {props.data.id} onClick={()=> {props.handleclick(props.data.id)}}>Click</button>
        </div>
    )
}