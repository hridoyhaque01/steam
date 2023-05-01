import React from "react";

export default function ProgressItem({
  content,
  name,
  time,
  lastPlayed,
  percent,
  progress,
  gameImg,
}) {
  return (
    <div>
      {/* game top  */}
      <div className="d-flex justify-content-between align-items-end">
        <div className="d-flex gap-3">
          <img src={gameImg} alt="call of duty" className="w-[210px]" />
          <h4 className="text-xl">{name}</h4>
        </div>
        <div className="px-3 pb-3 text-base">
          <p className="p-0 m-0">{time}</p>
          <p className="p-0 m-0">{lastPlayed}</p>
        </div>
      </div>
      {/* progress  */}
      <div className="d-flex align-items-center  py-3 progress-content border-bottom border-secondary">
        <h4 className="text-base">
          Achivement Progress: <span className="text-sm">{progress} </span>
        </h4>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>
        {content}
      </div>
    </div>
  );
}
