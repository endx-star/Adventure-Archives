import React from 'react'
import UserItem from './userItem'

const UserList = props => {
     if (props.items.length === 0) {
         return <div className="center">
             <h2>No users found.</h2>
         </div>
    }
    
    return (
   <ul className="list-none">
      {props.items.map(user => (  
            <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                places={user.places} 
            />
      ))}
    </ul>
  )
 }


export default UserList;