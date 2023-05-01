import React from "react";

import { Link } from "react-router-dom";

export default function SignleFriend({ details }) {
  const { img, link, name, activity, rank } = details || {};
  return (
    <Link
      to={link}
      className="d-flex align-items-center justify-content-between text-decoration-none"
    >
      <div className="d-flex gap-x-2">
        <img src={img} alt="profile" />
        <div className="text-fade">
          <h6 className="text-capitalize">{name}</h6>
          <p>{activity}</p>
        </div>
      </div>
      <div className="w-24 h-24 d-inline-flex align-items-center justify-content-center border border-green rounded-circle text-white">
        {rank}
      </div>
    </Link>
  );
}
