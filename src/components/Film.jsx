import React from 'react';

function Film (props) {
    return (
        <div>
            <h2>{props.render.name}</h2>
            <p>{props.render.age}</p>
        </div>
    )
}

export default Film