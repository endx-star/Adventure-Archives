import React from 'react'
import UserList from '../components/userList'

const Users = () => {
    const USERS = [
      {
        id: 1,
        name: 'John Doe',
        image: 'https://picsum.photos/200/300',
        places: 3
    },
    {
        id: 2,
        name: 'samson fbi',
        image: 'https://picsum.photos/200/300',
        places: 3
    },
       {
        id: 3,
        name: 'Golang donas',
        image: 'https://picsum.photos/200/300',
        places: 3
    },
       {
        id: 4,
        name: 'ephrem sambo',
        image: 'https://picsum.photos/200/300',
        places: 3
    },
       {
        id: 5,
        name: 'yeshi belay',
        image: 'https://picsum.photos/200/300',
        places: 3
    }
  ]


    return (
      <div className='w-4/5 ml-40 mr-16 my-10'>
        <UserList items={USERS} />
      </div>
    )
}

export default Users;
