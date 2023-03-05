import React from 'react'
import './../App.css';

export default function Title(props) {
    const { title, description, id } = props;
    return (
        <div className='card col-4'>
            <div className='card-header'><h1>{id}</h1></div><br />
            <div className='card-title'><h2>{title}</h2></div><br />
            <div className='card-description'><p>{description}</p>  </div><br />
        </div>
    )
}
