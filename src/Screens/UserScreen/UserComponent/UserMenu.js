import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Person2Icon from '@mui/icons-material/Person2';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';



function UserMenu() {
  return (
    <div className='menuBar sticky'>
        <button className='text-right'>
        {/* <h6><MenuIcon/></h6> */}
        </button>
        <h5><Person2Icon/>Profile</h5>
        <h5><AssignmentOutlinedIcon/>Project - 1</h5>         
        <h5><AssignmentOutlinedIcon/>Project - 2</h5>         
        <h5><AssignmentOutlinedIcon/>Project - 3</h5>         
        <h5><AssignmentOutlinedIcon/>Project - 4</h5>                  
        <h5><ForumOutlinedIcon/>Messages</h5>         
    </div>
  )
}

export default UserMenu