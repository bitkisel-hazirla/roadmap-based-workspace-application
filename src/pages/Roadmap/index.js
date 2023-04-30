import React from 'react';
import { roadmap } from '../../utils/constants/roadmap';
import RoadmapCard from '../../components/UI/RoadmapCard';

function Roadmap() {
  const roadmapCard = roadmap.map((item) => {
    return (
      <RoadmapCard
        key={item.index}
        icon={item.icon}
        title={item.title}
        text={item.text}
        link={item.link}
        index={item.index}
      />
    );
  });

  return (
    <div className="h-screen bg-slate-100 flex justify-center">
      <div className="flex w-4/5 flex-col ">
        <div className='break-words w-3/12 pt-4'>

        <h1 className="field-title font-extrabold leading-snug text-5xl text-slate-700">
          Explore by fields
        </h1>
        </div>

        <div className="roadmap-container !gap-12 pt-4 ">{roadmapCard}</div>
      </div>
    </div>
  );
}

export { Roadmap };
