import React from 'react';
import {Link} from 'react-router-dom'
import {Item} from './styled'
const index = (props) => {
    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt=""/>
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">...</div>
            </Link>
            
        </Item>
    )
}

export default index
