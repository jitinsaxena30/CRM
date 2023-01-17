import React from "react";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        width: "50vw",
        height: "50vh",
        border: "1px solid black",
      }}
    >
      <div className="row">
        <div className="col">
          <Link to="/admin">
            <button
              className="btn btn-large btn-primary"
              style={{ width: "48vw", height: "10vh", marginTop: "80px" }}
            >
              Admin Login
            </button>
          </Link>
          <Link to="user">
            <button
              className="btn btn-large btn-primary"
              style={{ width: "48vw", height: "10vh", marginTop: "40px" }}
            >
              User Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
