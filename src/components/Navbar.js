import React from "react";
import { Link } from "react-router-dom";

const navbarItems = [
  {
    id: 1,
    name: "store",
    link: "/",
  },
  {
    id: 2,
    name: "community",
    link: "/",
  },
  {
    id: 3,
    name: "noyonade",
    link: "/",
  },
  {
    id: 4,
    name: "chat",
    link: "/",
  },
  {
    id: 5,
    name: "support",
    link: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand text-2xl font-semibold" to="/">
        Steam
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-uppercase gap-y-2 font-medium ms-lg-5 mt-5 mt-lg-0">
          {navbarItems.map((navItem) => {
            const { id, name, link } = navItem || {};
            return (
              <li className="nav-item" key={id}>
                <Link
                  className="nav-link active hover:text-green"
                  aria-current="page"
                  to={link}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
