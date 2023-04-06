import React from 'react'
import PlatForm from './static/Platform'
import Relevance from './static/Relevance'

const GameFilter = () => {
    // This Game Filter includes 2 components: 1. Platform filter, 2. Order by filter 
    return (
        <div>
            <select className="form-select">
                <option value="">Platforms</option>
                {PlatForm.map(platform => <option key={platform} value={platform}> {platform} </option>)}
            </select>
            <select className="form-select">
                <option value="">Order by: Relevance</option>
                {Relevance.map(factor => <option key={factor} value={factor}> Order by: {factor} </option>)}
            </select>

        </div>
    )
}

export default GameFilter