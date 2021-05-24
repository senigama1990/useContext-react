import React from 'react'
import SideBar from './SideBar'
import Content from './Content'


function Body() {
    return (
        <div className='body-container'>
            <SideBar/>
            <Content/>
        </div>
    )
}

export default Body
