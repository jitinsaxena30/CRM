import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import UserStatus from "./UserStatus";


function UserHeader() {

  const [status,setStatus] = useState('Offline');
const[color,setColor] = useState('#c0c0c0');

const handleChange = (changedStatus)=>{
    let currentStatus = changedStatus;
    setStatus(currentStatus);
    console.log(currentStatus)
    if (currentStatus === 'Online') {
      setColor('#80FF00');
    }  if (currentStatus === 'Away') {
      setColor('#FFBC00');
    }  if (currentStatus === 'Offline') {
      setColor('#C0C0C0');
    } if(currentStatus === 'In Call') {
      setColor('#FF0000');
    }
}



  return (  
    <>
    <div className="container">
      <div className="row">

        <div className="col-sm-5" style={{marginTop: "25px"  }}>
          <AccountCircleOutlinedIcon/> <span style={{fontWeight:'bold'}}>  User 1 :</span> <span style={{color: `${color}`, paddingLeft:"28px" }}>{status}</span>
          <p ></p>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <UserStatus handleChange = {handleChange} color={color} status={status} />
        </div>
      </div>
    </div>
    </>
  );
}

export default UserHeader;
