import React from 'react'

function UserAvatar({user}) {
    return (
        <>
            <img className= 'user-avatar' src={user.avatar} alt="avatar"/>
        </>
    )
}

export default UserAvatar
