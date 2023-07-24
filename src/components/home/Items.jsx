import React from 'react'
import './Items.css'


const Items = (props) => {
    const tt = (<div><p>{props.txt} <span className='high'>{props.highlight}</span></p></div>);
    const tt2 = (<div><p><span className='high'>{props.highlight}</span> {props.txt}</p></div>);
    
  return (
    <div className='flexy'>
        <img className='images' alt="" src={props.imgname}></img>
        <div>{props.booly === "true"?  tt2 : tt}</div>
   </div>
    
  )
}

export default Items