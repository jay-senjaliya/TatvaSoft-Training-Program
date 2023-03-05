import React from 'react'

export default function Title(props) {
    const { title, description } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
