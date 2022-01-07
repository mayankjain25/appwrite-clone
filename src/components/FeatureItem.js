import React from 'react'

const FeatureItem = (props) => {
    return (
        <div>
            <i className={props.icon}></i>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default FeatureItem
