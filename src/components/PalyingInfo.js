import React from "react";
import GameDetails from "./GameDetails";
import OthersGame from "./OthersGame";

export default function PalyingInfo() {
  return (
    <section className="py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-8">
            <GameDetails />
          </div>
          <div className="col-lg-4">
            <OthersGame />
          </div>
        </div>
      </div>
    </section>
  );
}
