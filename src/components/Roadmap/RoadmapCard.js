import React from 'react';
import { NavLink } from 'react-router-dom';
import { TfiArrowRight } from 'react-icons/tfi';

function RoadmapCard({ index, icon, title, text, link }) {
  function getColorByIndex(index) {
    const colors = ['bg-blue-200', 'bg-lime-200', 'bg-violet-200', 'bg-rose-100'];
    const colorIndex = (index - 1) % colors.length;
    return colors[colorIndex];
  }

  const bgColor = getColorByIndex(index);

  return (
    <NavLink to="/field" className="roadmap-card">
      <div className="roadmap-card-item flex flex-col justify-between h-80 w-80 bg-white rounded-2xl pt-6 pl-4 drop-shadow-md hover:drop-shadow-2xl ">
        <div className="flex items-center gap-2 mt-4 ml-4 mb-4">
          <div className={`${bgColor} h-12 w-12 rounded-xl flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="font-extrabold text-lg/6	w-4"> {title} </h3>
        </div>
        <p className="text-slate-500 w-11/12 h-3/5 p-4 leading-relaxed">{text}</p>

        <TfiArrowRight className="self-end mr-8 mb-8" />
      </div>
    </NavLink>
  );
}

export default RoadmapCard;
