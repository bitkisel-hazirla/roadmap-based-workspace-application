import React from 'react';
import { IconContext } from 'react-icons';
import { FiBookOpen, FiSquare } from 'react-icons/fi';
import { TfiAngleDoubleLeft } from 'react-icons/tfi';
import { roadmap } from '../../utils/constants/roadmap';

export const Field = () => {
  return (
    <>
      <div className="concepts flex flex-col min-h-screen justify-center items-center gap-4 p-4">
        <div className="flex justify-around items-center bg-sky-100/100 rounded-2xl p-4 gap-4">
          <div className="progress-bar flex justify-center items-center w-24 h-24 rounded-full">
            <p className="font-bold text-lg">80%</p>
          </div>
          <h1 className="text-4xl w-60 h-20 text-center subItem-title font-bold">
            {roadmap[0].subItems.title}
          </h1>
        </div>
        <div className="flex flex-col items-center  w-5/12 bg-sky-100/50 rounded-2xl p-16">
          {roadmap[0].subItems.subTitles.map((item) => {
            // TODO:: we need to add key
            return (
              <div className="flex h-20 w-full items-center text-2xl uppercase justify-between">
                <div className="flex items-center gap-4">
                  <IconContext.Provider value={{ color: '#597D9D' }}>
                    <FiBookOpen />
                  </IconContext.Provider>
                  <p className="subItem-subTitle">{item.title}</p>
                </div>
                <IconContext.Provider value={{ color: '#597D9D' }}>
                  <FiSquare />
                </IconContext.Provider>
              </div>
            );
          })}
        </div>
      </div>
      <IconContext.Provider value={{ className: 'bottom-navigation relative bottom-8 left-20' }}>
        <TfiAngleDoubleLeft />
      </IconContext.Provider>
    </>
  );
};
