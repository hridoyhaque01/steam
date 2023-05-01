import React from "react";
import Option from "./Options";
// icons
import { AiFillHeart } from "react-icons/ai";
import FriendList from "./FriendList";

const options = [
  {
    id: 1,
    name: "games",
    link: "/",
    value: 13,
  },
  {
    id: 2,
    name: "inventory",
    link: "/",
    value: "",
  },
  {
    id: 3,
    name: "screenshot",
    link: "/",
    value: 1,
  },
  {
    id: 4,
    name: "videos",
    link: "/",
    value: "",
  },
  {
    id: 5,
    name: "workshop items",
    link: "/",
    value: "",
  },
  {
    id: 6,
    name: "reviews",
    link: "/",
    value: "",
  },
  {
    id: 7,
    name: "guides",
    link: "/",
    value: "",
  },
  {
    id: 8,
    name: "Artwork",
    link: "/",
    value: "",
  },
];

export default function OthersGame() {
  return (
    <div className="bg-dark/900 common-bdr mt-4 mt-lg-0 p-3 d-flex flex-column gap-y-3">
      <div className="text-fade">
        <h4 className="text-xl">Currently Offline</h4>
        <p>Last Online 43 hrs, 44 minutes ago</p>
      </div>
      <Option to="/" name="Profile Awards" value="1" />
      <div>
        <AiFillHeart className="text-[48px] text-teal" />
      </div>
      <Option to="/" name="badges" value="1" />
      {options.map((option) => {
        const { id, link, name, value } = option || {};
        return <Option to={link} name={name} value={value} key={id} />;
      })}
      <Option to="/" name="friends" value="5" />

      <FriendList />
    </div>
  );
}
