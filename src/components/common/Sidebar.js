import React from 'react';
import { Link } from 'react-router-dom';
import { main } from '../../utils/constants/sidebar';

export const Sidebar = () => {
  return (
        <div style={{ height: '96%' }} className="sidebar m-4 rounded-2xl shadow-lg w-72">
            <div className="flex flex-col  m-5 rounded-md h-full">
                <div className="title h-1/6 w-full flex justify-center items-center border-b-2 text-2xl italic">Shellp.</div>
                <div className="flex justify-start items-center h-1/4 w-full  border-b-2">
                    <div className='flex flex-col ml-2 justify-center gap-3'>
                        { main.map((item) => {
                          if (item.index === 0) {
                            return (
                                <Link to={item.link} className='flex gap-2 items-center text-lg'>{item.icon} {item.title}</Link>
                            );
                          }
                        })}
                    </div>
                </div>
                <div className="flex justify-start items-center h-1/4 w-full border-b-2">
                    <div className='flex flex-col ml-2 justify-center gap-3'>
                    { main.map((item) => {
                      if (item.index === 1) {
                        return (
                                <Link to={item.link} className='flex gap-2 items-center text-lg'>{item.icon} {item.title}</Link>
                        );
                      }
                    })}
                    </div>
                </div>
                <div className="flex justify-start items-center h-1/4 w-full  border-b-2">
                    <div className='flex flex-col ml-2 justify-center gap-3'>
                    { main.map((item) => {
                      if (item.index === 2) {
                        return (
                                <Link to={item.link} className='flex gap-2 items-center text-lg'>{item.icon} {item.title}</Link>
                        );
                      }
                    })}
                    </div>
                </div>
                <div className="h-1/3 w-full flex justify-center items-end">
                    <div className="flex gap-3 mb-4">
                        <img style={{ height: '50px' }} alt='avatar' className="rounded-full" src={'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'}></img>
                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-sm">Tuğba Yılmaz</p>
                            <p className="font-light text-xs">tugbayill01@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
