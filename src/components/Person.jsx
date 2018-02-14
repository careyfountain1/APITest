import React from 'react'

function Person(props) {
    return (
        <div>
            <h2>{props.render.name}</h2>
            <p>{props.render.age}</p>
        </div>
    )
}

export default Person