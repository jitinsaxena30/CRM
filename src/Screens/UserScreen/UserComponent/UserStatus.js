import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import StatusIcon from "@mui/icons-material/CircleRounded";

function UserStatus() {
  const [status, setStatus] = useState('Offline');
  const [color, setColor] = useState('#C0C0C0');

  const handleChange = (event) => {
    let currentStatus = event.target.value;
    setStatus(currentStatus);
    if (currentStatus === 'Online') {
      setColor('#80FF00');
    }  if (currentStatus === 'Away') {
      setColor('#FFBC00');
    }  if (currentStatus === 'Offline') {
      setColor('#C0C0C0');
    } if(currentStatus === 'In-Call') {
      setColor('#FF0000');
    }
  };

  console.log(status);


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
                onChange={handleChange}
                
              >
                <MenuItem value={"Online"} >Online</MenuItem>
                <MenuItem value={"Offline"} >Offline</MenuItem>
                <MenuItem value={"In-Call"} >In Call</MenuItem>
                <MenuItem value={"Away"} >Away</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
