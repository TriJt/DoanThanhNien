import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="left-header">
        <img
          src="https://rubee.com.vn/wp-content/uploads/2021/05/Logo-doan.jpg"
          alt=""
          className="logo"
        />
      </div>
      <div className="center-header">ĐOÀN THANH NIÊN</div>
      <div className="right-header">
        <Link to={"/login"} style={{ textDecoration: "none" }}></Link>
      </div>
    </div>
  );
}
