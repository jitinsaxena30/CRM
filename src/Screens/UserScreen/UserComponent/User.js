import React from 'react';
import UserHeader from './UserHeader';
import UserMenu from './UserMenu';
import UserTable from './UserTable';


function User() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2">
            <UserMenu/>
            </div>
            <div className="col-sm-9">
            <div>
            <UserHeader/>
            </div>
            <div>
            <UserTable/>
            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default User