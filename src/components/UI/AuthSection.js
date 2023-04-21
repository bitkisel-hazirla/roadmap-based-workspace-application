import React from 'react';
import { AuthButton } from './AuthButton';
import { signIn, signUp } from '../../utils/constant/authSection';

function AuthSection({ currentPage, slideDirection, handleClick }) {
  const { title, description, buttonText } = currentPage === 'signup' ? signUp : signIn;

  const directionClass = `slide-${slideDirection}`;

  return (
    <div
      className={`auth-section translate-x-0 ${directionClass} flex relative justify-center items-center w-2/5 h-full overflow-hidden`}
    >
      <div className="circle first absolute rounded-full"></div>
      <div className="circle second absolute rounded-full"></div>
      <div className="circle third absolute rounded-full"></div>
      <div className="circle fourth absolute rounded-full"></div>
      <div className="container flex-col items-center text-center justify-center text-white mb-20">
        <h2 className="text-5xl mb-8">{title}</h2>
        <p className="mb-8">{description}</p>
        <AuthButton theme="primary" onClick={handleClick}>
          {buttonText}
        </AuthButton>
      </div>
    </div>
  );
}

export { AuthSection };
