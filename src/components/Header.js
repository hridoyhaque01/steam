/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Navbar from "./Navbar";
import UserNavbar from "./UserNavbar";

export default function () {
  return (
    <header className="py-3 bg-dark/50">
      <div className="container-xl">
        <UserNavbar />
        <Navbar />
      </div>
    </header>
  );
}
