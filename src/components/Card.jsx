import React from 'react'
import '../styling.scss'

const Card = ({ catData }) => {
    return (
        <div className='general-div'>
            <h2>Cats' World</h2>
            <div className='main-content'>
            {catData.map(Info => (
                <div key={Info.id} className='catmapping'>
                        <img src={Info.catImage} alt="" />
                        <h4>Country: {Info.country}</h4>
                        <p>{Info.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Card