import React from 'react'
import Avatar from '../../shared/components/avatar';

const UserItem = props => {
    return (
        <li className="list-none">
            <div className="user-item__image">
                <Avatar image={props.image} alt={props.name} />
            </div>      
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.places} {props.places === 1 ? 'Place' : 'Places'}</h3>   
            </div>
        </li>
    )

}

export default UserItem;