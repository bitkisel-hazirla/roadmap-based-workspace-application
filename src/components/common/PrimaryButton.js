import React from 'react';
import { string, func, element } from 'prop-types';

export const PrimaryButton = (props) => {
  const { onClick, icon, text } = props;
  return (
        <button onClick={onClick} style={{ backgroundColor: 'E6F2FF', color: 'black' }} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="flex justify-center items-center px-6 gap-2 py-2 rounded-lg ">
            {icon}
            {text}
            </button>
  );
};

PrimaryButton.propTypes = {
  text: string,
  onClick: func,
  icon: element
};
