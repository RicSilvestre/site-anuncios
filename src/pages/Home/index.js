import React from 'react';
import {Link} from 'react-router-dom'

const index = () => {
    return (
        <div>
           home 
           <Link to="/about">Sobre</Link>
        </div>
    )
}

export default index
