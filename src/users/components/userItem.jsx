import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../../shared/components/UIElements/avatar';
import Card from '../../shared/components/UIElements/card'

const UserItem = props => {
    return (
        <li>
         <Card>
            <Link to={`/${props.id}/places`}>
            <div>
                <Avatar image={props.image} alt={props.name} />
            </div>      
            <div>
                <h2>{props.name}</h2>
                <h3>{props.places} {props.places === 1 ? 'Place' : 'Places'}</h3>   
            </div>
            </Link>
         </Card>
        </li>
    )

}

export default UserItem;