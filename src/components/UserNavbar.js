import React from "react";
// icons
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";

// image

import { Link } from "react-router-dom";
import profile from "../assets/images/profile-1.png";

const UserNavbar = () => {
  return (
    <nav>
      <div className="container-xl">
        <ul className="nav align-items-center justify-content-end gap-x-4">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link d-inline-flex align-items-center gap-x-2 py-2 px-4 bg-fade text-capitalize text-white"
            >
              <BsDownload />
              <span>install Steam</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link py-2 px-3 bg-dark/100 text-white">
              <BiMessageSquareDetail />
            </Link>
          </li>
          <li className="nav-item dropdown text-capitalize">
            <Link
              className="nav-link dropdown-toggle text-white text-base"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-target="#user-menu"
              aria-expanded="false"
            >
              Noyonade
            </Link>
            <span>$32.8 usd</span>
            <ul className="dropdown-menu" id="user-menu">
              <li>
                <Link className="dropdown-item" to="/">
                  profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  log out
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link ">
              <img
                src={profile}
                alt="profile"
                className="img-fluid h-24 w-24"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavbar;
