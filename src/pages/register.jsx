import React from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faCircleUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

function register() {
  return (
    <>
      <img
        src="/src/img/logo.png"
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: 324,
          height: 1000,
          left: 0,
          top: -29,
          position: "absolute",
          background: "#2B3463",
        }}
      />
      <div
        style={{
          width: 800,
          height: 115,
          left: 665,
          top: 151,
          borderRadius: 16,
          zIndex: 2,
          position: "absolute",
          background: "#2B3463",
        }}
      />
      <div
        style={{
          width: 1470,
          height: 750,
          left: 353,
          top: 209,
          position: "absolute",
          background: "#E6E6E6",
          borderRadius: 50,
        }}
      />

      <FontAwesomeIcon icon={faGear} className="SettingIcon" />
      <FontAwesomeIcon icon={faCircleUser} className="UserIcon" />
      <FontAwesomeIcon icon={faSearch} className="SearchIcon" />

      <div className="searchbar">
        <input type="search" placeholder="Search Here.." />
      </div>

      <div
        style={{
          width: 600,
          height: 48,
          left: 694,
          top: 58,
          borderRadius: 50,
          position: "absolute",
          background: "#C0C0C0",
        }}
      />

      <h1>Mange</h1>

      <h2>Add New Employee</h2>

      <div className="form">
        <input type="text" className="Fname" />
        <input type="text" className="Lname" />
        <input type="email" className="Email" />
        <input type="tel" className="Phone" />
        <input type="password" className="Password" />
        <input type="radio" id="Male" className="Male" value="Male" />
        <label for="Male">Male</label><br></br>
        <input type="radio" id="Female" className="Female" value="Female" />
        <label for="Female">Female</label><br></br>
      </div>

      <h3>First Name</h3>

      <div
        style={{
          width: 510,
          height: 67,
          left: 540,
          top: 390,
          borderRadius: 12,
          position: "absolute",
          background: "#ffffff",
        }}
      />

      <h4>Last Name</h4>

      <div
        style={{
          width: 510,
          height: 67,
          left: 1140,
          top: 390,
          borderRadius: 12,
          position: "absolute",
          background: "#ffffff",
        }}
      />

      <h5>Email</h5>

      <div
        style={{
          width: 510,
          height: 67,
          left: 540,
          top: 540,
          borderRadius: 12,
          position: "absolute",
          background: "#ffffff",
        }}
      />

      <h6>Password</h6>

      <div
        style={{
          width: 510,
          height: 67,
          left: 540,
          top: 698,
          borderRadius: 12,
          position: "absolute",
          background: "#ffffff",
        }}
      />

      <h7>Gender</h7>

      <h8>Phone Number</h8>

      <div
        style={{
          width: 510,
          height: 67,
          left: 1140,
          top: 540,
          borderRadius: 12,
          position: "absolute",
          background: "#ffffff",
        }}
      />
    </>
  );
}

export default register;
