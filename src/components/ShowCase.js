import React from "react";
// icon

import { AiTwotoneStar } from "react-icons/ai";

// image

import game from "../assets/images/game.jpeg";

export default function ShowCase() {
  return (
    <div className="bg-dark/900 common-bdr">
      {/* title  */}
      <div className="future-gradient py-2 px-3">
        <h4 className="text-xl text-capitalize">screenshot showcase</h4>
      </div>
      <div className="p-3">
        {/* details  */}
        <div className="w-lg-75">
          <div className="">
            <img src={game} alt="game" className="w-100" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi eaque omnis voluptas placeat corrupti. Amet?
            </p>
            <ul className="list-unstyled d-flex align-items-center gap-x-3">
              <li className="d-inline-flex align-items-center gap-x-1 text-teal">
                <AiTwotoneStar />
                <span>1</span>
              </li>
              <li className="d-inline-flex align-items-center gap-x-1 text-teal">
                <AiTwotoneStar />
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
