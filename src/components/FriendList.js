import React from "react";
import SignleFriend from "./SignleFriend";
// images
import profile from "../assets/images/profile-1.png";

const friends = [
  {
    id: 1,
    img: profile,
    link: "/",
    name: "Annalise",
    activity: "last played 5 days ago",
    rank: 45,
  },
  {
    id: 2,
    img: profile,
    link: "/",
    name: "Charmaine",
    activity: "last played 10 days ago",
    rank: 35,
  },
  {
    id: 3,
    img: profile,
    link: "/",
    name: "Priscilla",
    activity: "last played 4 days ago",
    rank: 76,
  },
  {
    id: 4,
    img: profile,
    link: "/",
    name: "Calista",
    activity: "last played 4 days ago",
    rank: 68,
  },
  {
    id: 5,
    img: profile,
    link: "/",
    name: "Letitia",
    activity: "last played 6 days ago",
    rank: 32,
  },
];

export default function FriendList() {
  return (
    <div className="d-flex flex-column gap-y-3">
      {friends.map((friend) => (
        <SignleFriend details={friend} key={friend?.id} />
      ))}
    </div>
  );
}
