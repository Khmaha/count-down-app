import React from 'react';
import './Card.scss';
const Card = (props) => {
    return (
        <div className="Card">
            {console.log("props", props)}
            {props.children}
        </div>
    )
}

export default React.memo(Card)