import React from "react";
import { Link } from "react-router-dom";

export default function Option({ name, value, ...rest }) {
  return (
    <div>
      <Link
        className="d-flex gap-x-2 text-decoration-none p-2 border-1 border-dashed border-green text-xl text-fade text-capitalize"
        {...rest}
      >
        <span>{name}</span>
        <span>{value}</span>
      </Link>
    </div>
  );
}
