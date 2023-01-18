import React, {useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import StatusIcon from "@mui/icons-material/CircleRounded";

function UserStatus({...props}) {

  const {handleChange,color,status} = {...props};

  return (

    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 d-flex justify-content-end"
          style={{
            height: "8vh",
            width: "100vw",
            marginTop: "20px",
            right: "0px",
          }}
        >
          <p
            style={{
              marginRight: "8px",
              marginTop: "13px",
              color: `${color}`,
            }}
          >
            <StatusIcon />
          </p>

          <Box style={{ width: "12vw", outline:'none' }}>
            <FormControl style={{ width: "12vw" }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={""}
                value={status}
                label="Status"
                // onChange={(event)=>{handleChange(event.target.value)}}
                
              >
                <MenuItem value={"Online"} onClick={()=>{handleChange("Online")}} >Online</MenuItem>
                <MenuItem value={"Offline"} onClick={()=>{handleChange("Offline")}} >Offline</MenuItem>
                <MenuItem value={"InCall"} onClick={()=>{handleChange("InCall")}} >In Call</MenuItem>
                <MenuItem value={"Away"} onClick={()=>{handleChange("Away")}} >Away</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>

  );
}

export default UserStatus;

