import React from 'react'

export default function Title(props) {
    const { title, description, id } = props;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
