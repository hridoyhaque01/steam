import React from "react";
// icons
import { BiFlag, BiGame } from "react-icons/bi";
// image
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.png";

export default function UserInfo() {
  return (
    <section className="pt-4">
      <div className="container-xl">
        <div className="user-info bg-dark/900 common-bdr">
          {/* user text  */}
          <div className="user-text">
            {/* img  */}
            <div className="user-img">
              <img
                src={profile}
                alt="profile"
                className="w-[210px] h-100 object-cover"
              />
            </div>
            {/* text  */}
            <div className="user-details mt-3">
              <h2 className="">Noyonade</h2>
              <h4>
                <BiFlag className="text-teal" /> <span>Canada</span>
              </h4>
              {/* icons  */}
              <ul className="list-unstyled d-flex gap-x-2 text-3xl text-green">
                <li>
                  <BiGame />
                </li>
                <li>
                  <BiGame />
                </li>
                <li>
                  <BiGame />
                </li>
                <li>
                  <BiGame />
                </li>
                <li>
                  <BiGame />
                </li>
              </ul>
            </div>
          </div>
          {/* user info  */}

          <div className="user-level">
            <h2>
              Level
              <span className="">11</span>
            </h2>
            <div className="acc">
              <div className="count">10+</div>
              <div>
                <h4>Adept accumulator</h4>
                <p>100xp</p>
              </div>
            </div>
            <div>
              <Link to="/" className="btn dashed-btn">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
