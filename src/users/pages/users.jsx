import React from 'react'
import UserList from '../components/userList'

const Users = () => {
    const USERS = [{
        id: 1,
        name: 'John Doe',
        image: 'https://picsum.photos/200/300',
        places: 3
    }]
    return <UserList items = {USERS} />
}

export default Users;
