import React from 'react'

const Avatar = props => {
     return (
         <div className="avator">    
             <img src={props.image} alt={props.alt} />       
        </div>
        )
 
}

export default Avatar;