import React from 'react'
import { useParams } from 'react-router-dom'


export const Card = (props) => {
    const {id} = useParams();
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.descripcion}</p>
                <p className="card-text">{props.price}</p>
            </div>
        </div>
    )
}
