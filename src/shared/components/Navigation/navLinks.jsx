import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ mobile }) => {
    return (
        <ul className={`flex flex-col sm:flex-row ${mobile ? 'space-y-1' : 'space-y-2'} sm:space-y-0 sm:space-x-2 justify-end items-center h-full m-0 bg-gray-800 sm:bg-transparent p-2 sm:p-0 rounded-md`}>
          <li>
            <NavLink to='/' end className={({ isActive }) =>
                isActive
                  ? 'bg-gray-900 text-white px-2 py-2 rounded-md text-sm font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium'
              }
              >
                All places
            </NavLink>
          </li>
           <li>
            <NavLink to='/places' end className={({ isActive }) =>
                isActive
                  ? 'bg-gray-900 text-white px-2 py-2 rounded-md text-sm font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium'
              }
              >
                My places
           </NavLink>
          </li>
           <li >
            <NavLink to='/places/new' className={({ isActive }) =>
                isActive
                  ? 'bg-gray-900 text-white px-2 py-2 rounded-md text-sm font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium'
              }
              >
                Add places
            </NavLink>
          </li>
           <li>
            <NavLink to='auth' className={({ isActive }) =>
                isActive
                  ? 'bg-gray-900 text-white px-2 py-2 rounded-md text-sm font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium'
              }
              >
                Authenticate
            </NavLink>
          </li>
        </ul>
    )
};

export default NavLinks;