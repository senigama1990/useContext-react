import React, { useContext } from 'react'
import UserAvatar from './UserAvatar'
import { UserContext} from '../App'

function Nav() {
    const user = useContext(UserContext)
    return (
        <div className='nav'>
            <UserAvatar user={user}/>
        </div>
    )
}

export default Nav
