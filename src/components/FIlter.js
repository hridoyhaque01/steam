import React from "react";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <div className="d-flex justify-content-end ">
      <ul className="d-inline-flex align-items-center gap-x-2 text-base bg-dark/900 px-3 py-2 border-1 border-dashed border-light">
        <li className="text-fade">View</li>
        <li>
          <Link to="/" className="text-decoration-none text-white">
            All Recently Played
          </Link>
        </li>
        <li className="text-fade">|</li>
        <li>
          <Link className="text-decoration-none text-white" to="/">
            wishlist
          </Link>
        </li>
      </ul>
    </div>
  );
}
