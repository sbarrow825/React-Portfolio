import React from 'react'

export default function Container(props) {

    return (
        <div className="container" id={props.id}>{props.children}</div>
    )
}