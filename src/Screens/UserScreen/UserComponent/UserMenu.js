import React from "react";
import { Link } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

function UserMenu() {
  return (
    <div className="menuBar sticky">
      <div style={{paddingTop:"40px"}}>
        <Link to="">
          <h5 className="menubarLink">
            <Person2Icon />
            Profile
          </h5>
        </Link>
        <Link to="">
          <h5 className="menubarLink">
            <AssignmentOutlinedIcon />
            Project - 2
          </h5>
        </Link>
        <Link to="">
          <h5 className="menubarLink">
            <AssignmentOutlinedIcon />
            Project - 1
          </h5>
        </Link>
        <Link to="">
          <h5 className="menubarLink">
            <AssignmentOutlinedIcon />
            Project - 4
          </h5>
        </Link>
        <Link to="">
          <h5 className="menubarLink">
            <AssignmentOutlinedIcon />
            Project - 3
          </h5>
        </Link>
        <Link to="">
          <h5 className="menubarLink">
            <ForumOutlinedIcon />
            Messages
          </h5>
        </Link>
        <Link to="/">
          <h5 className="menubarLink">
            <PowerSettingsNewOutlinedIcon />
            Logout
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default UserMenu;
