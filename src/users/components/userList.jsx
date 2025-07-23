import React from 'react'
import UserItem from './userItem'

const UserList = props => {
    // Only include users with both id and name
    const validUsers = props.items.filter(user => user.id && user.name);
    if (validUsers.length === 0) {
        return (
        <div className="flex justify-center text-blue-500">
            <Card>
                 <h2>No users found.</h2>
            </Card>
        </div>)
    }
    
    return (
        <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {validUsers.map(user => (  
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