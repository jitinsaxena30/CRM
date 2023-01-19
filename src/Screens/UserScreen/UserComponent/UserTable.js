import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";

const data = [
  {
    id: "1",
    fname: "vadim",
    lname: "Vadim",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "2",
    fname: "alex",
    lname: "Alex <3",
    mobile: "9415678967",
    email: "honeyagarwal241@gmail.com",
  },
  {
    id: "3",
    fname: "elonmusk",
    lname: "Elon Musk",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "4",
    fname: "jobs",
    lname: "Steve Jobs",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "5",
    fname: "joe",
    lname: "Joe",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "6",
    fname: "peter",
    lname: "Peter",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "7",
    fname: "lilnas",
    lname: "Lil Nas",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "8",
    fname: "Lukas",
    lname: "Lukas",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "9",
    fname: "Yuri",
    lname: "Yuri Gagarin",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "10",
    fname: "Dav",
    lname: "Dav",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
  {
    id: "11",
    fname: "Logan",
    lname: "Logan Paul",
    mobile: "9415678967",
    email: "jitinsaxena.js@gmail.com",
  },
];

export default function UserTable() {
  
  
  
  const [user, setUser] = useState();

  // const getUserData = async () => {
  //   try {
  //     const response = await fetch('https://dummyjson.com/users');
  //     const data = await response.json();
  //     setUser(data.users)
  //   } catch (error) {
  //     console.log(error)
  //   }




    
  

  const [status, setStatus] = useState("Not Connected");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  useEffect(()=>{
    axios.get('https://dummyjson.com/users')
    .then((res)=>{
      setUser(res.data.users);
      // console.log(res);
    })
    .catch((error)=>(console.log(error)));
  },[])

  return (
    <div className="container" style={{ width: "100%", marginBottom:"20px" }}>
      <div className="row">
        <div className="col">
          <TableContainer
            component={Paper}
            style={{ marginTop: "50px", width: "70vw" }}
          >
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Id</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>First Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Last Name</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Contact</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Action</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user && user.map((elem) => {
                  return (
                    
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={elem.id}
                      >
                        <TableCell component="th" scope="row">
                          {elem.id}
                        </TableCell>
                        <TableCell align="center">{elem.firstName}</TableCell>
                        <TableCell align="center">{elem.lastName}</TableCell>
                        <TableCell align="center" className="contactButton">
                          <button id="contactIcon">
                            <a
                              href={`mailto:${elem.email}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <EmailIcon />
                            </a>
                          </button>
                          <button id="contactIcon">
                            <a href={`tel:${elem.phone}`}>
                              <LocalPhoneIcon />
                            </a>
                          </button>
                        </TableCell>

                        <TableCell align="center">
                          <Box style={{ width: "100%" }}>
                            <FormControl style={{ width: "12vw" }}>
                              <InputLabel id="demo-simple-select-label">
                                Status
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={""}
                                value={elem.status}
                                label="Status"
                                onChange={handleChange}
                              >
                                <MenuItem value={"connected"}>
                                  Connected
                                </MenuItem>
                                <MenuItem value={"not connected"}>
                                  Not Connected
                                </MenuItem>
                                <MenuItem value={"Follow Up"}>
                                  Follow Up
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </TableCell>
                      </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
