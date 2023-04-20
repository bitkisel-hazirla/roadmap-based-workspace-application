import React from 'react';
import { AuthButton } from './AuthButton';

function AuthSection({ currentPage, slideDirection, handleClick }) {
  const [heading, text, buttonText] =
    currentPage === 'signup'
      ? ['Hello Friend!', 'Aldready have an account? Sign In then', 'Sign In']
      : ['Welcome Back!', 'Not have an account? Sign Up then', 'Sign Up'];

  const directionClass = slideDirection === 'left' ? 'slide-left' : 'slide-right';

  return (
    <div
      className={`auth-section translate-x-0 ${directionClass} flex relative justify-center items-center w-2/5 h-full overflow-hidden`}
    >
      <div className="circle first absolute rounded-full"></div>
      <div className="circle second absolute rounded-full"></div>
      <div className="circle third absolute rounded-full"></div>
      <div className="circle fourth absolute rounded-full"></div>
      <div className="container flex-col items-center text-center justify-center text-white mb-20">
        <h2 className="text-5xl mb-8">{heading}</h2>
        <p className="mb-8">{text}</p>
        <AuthButton theme="primary" onClick={handleClick}>
          {buttonText}
        </AuthButton>
      </div>
    </div>
  );
}

export { AuthSection };
