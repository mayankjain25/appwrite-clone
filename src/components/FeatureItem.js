import React from 'react'
import "../styles/FeatureItem.css"

const FeatureItem = (props) => {
    return (
        <div className='feature-item'>
            <i style={{color:"#f15783"}}className={props.icon}></i>
            <h2 style={{color:"#f15783",marginTop:"20px",width:"100%", fontSize:"1rem" }}>{props.title}</h2>
            <p style={{fontSize:"0.75rem",marginTop:"10px"}}>{props.description}</p>
        </div>
    )
}

export default FeatureItem
