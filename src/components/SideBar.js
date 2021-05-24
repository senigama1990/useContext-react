import React, { useContext } from 'react'
import UserStates from './useStates'

function SideBar() {
    return (
        <div className='sidebar'>
            <UserStates/>
        </div>
    )
}

export default SideBar
