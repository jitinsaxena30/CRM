import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import UserStatus from "./UserStatus";
import userTable from "./UserTable";



function UserHeader() {



  return (
    <>
    <div className="container">
      <div className="row">

        <div className="col-sm-5" style={{marginTop: "25px"  }}>
          <AccountCircleOutlinedIcon/> <span > <strong> User 1</strong></span>
          {/* <p>{userStatus}</p> */}
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <UserStatus />
        </div>
      </div>
    </div>
    </>
  );
}

export default UserHeader;
