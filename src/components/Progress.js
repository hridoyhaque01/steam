import React from "react";
// images
import { Link } from "react-router-dom";
import apex from "../assets/images/apex.jpeg";
import cod from "../assets/images/cod.jpeg";
import pass from "../assets/images/pass1.jpg";
import ProgressItem from "./ProgressItem";

// icons

import { BsFillCameraFill } from "react-icons/bs";

const PassItems = [
  {
    id: 1,
    img: pass,
    link: "/",
  },
  {
    id: 2,
    img: pass,
    link: "/",
  },
  {
    id: 3,
    img: pass,
    link: "/",
  },
  {
    id: 4,
    img: pass,
    link: "/",
  },
  {
    id: 5,
    img: pass,
    link: "/",
  },
  {
    id: 7,
    img: pass,
    link: "/",
  },
  {
    id: 8,
    img: pass,
    link: "/",
  },
  {
    id: 9,
    img: pass,
    link: "/",
  },
  {
    id: 10,
    img: pass,
    link: "/",
  },
];

// decide what to render

let content1 = null;

if (PassItems?.length === 0) {
  content1 = <div>No Pass Availabel!</div>;
}

if (PassItems?.length > 0 && PassItems?.length > 5) {
  const slicePass = PassItems.slice(0, 3);
  const extraPass = PassItems?.length - 3;
  content1 = (
    <ul className="d-inline-flex justify-content-end  gap-x-2 passes">
      {slicePass.map((pass) => {
        const { id, link, img } = pass || {};
        return (
          <li className="" key={id}>
            <Link to={link}>
              <img src={img} alt="pass" className="w-24 h-24 object-cover" />
            </Link>
          </li>
        );
      })}
      <li className="">
        <Link
          className="w-24 h-24 d-flex align-items-center justify-content-center bg-dark/50 text-white text-decoration-none"
          to="/"
        >
          {extraPass}+
        </Link>
      </li>
    </ul>
  );
}

export default function Progress() {
  return (
    <div className="common-bdr bg-dark/900 p-3">
      <ProgressItem
        gameImg={cod}
        name="Call Of Duty:infinity warfare"
        time="240 hrs on record"
        lastPlayed="last played on 09 April"
        percent="90"
        progress="91 of 109"
        content={content1}
      />
      <div className="mt-1 mb-4">
        <BsFillCameraFill /> <span> screenshot 1</span>
      </div>
      <ProgressItem
        gameImg={apex}
        name="Apex Legend"
        time="9.8 hrs on record"
        lastPlayed="last played on 29 April"
        percent="90"
        progress="6 of 12"
        content={content1}
      />
    </div>
  );
}
