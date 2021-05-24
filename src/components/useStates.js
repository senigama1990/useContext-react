import React, { useContext } from 'react'
import UserAvatar from './UserAvatar'
import { UserContext } from '../App'


function useStates() {
    const user = useContext(UserContext)
    return (
        <div className = 'user-states'>
            <div>
                <UserAvatar user={ user}/>
                {user.name}
            </div>
            <div className = 'states'>
                <p>{ user.followers} ta followers</p>
                <p>{ user.following} ta followinglar bor</p>
            </div>
        </div>
    )
}

export default useStates
