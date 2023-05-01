import React from "react";
import Activity from "./Activity";
import Filter from "./FIlter";
import Progress from "./Progress";
import ShowCase from "./ShowCase";

export default function GameDetails() {
  return (
    <div className="d-flex flex-column gap-y-4">
      <ShowCase />
      <Activity />
      <Progress />
      <Filter />
    </div>
  );
}
