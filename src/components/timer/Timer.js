import React from 'react';
export const Timer = ({ time }) => {
  return (
    <div
      style={{ border: '4px solid #7E828E' }}
      className="flex justify-center items-center rounded-full h-72 w-72"
    >
      {time || '00:00'}
    </div>
  );
};
