import React, { useState } from 'react';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { AuthSection } from '../../components/UI/AuthSection';

const Authentication = ({ initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  const flexDirection = currentPage === 'login' ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`authPage w-screen h-screen flex ${flexDirection}`}>
      <AuthSection currentPage={currentPage} handleClick={handlePageChange} />
      <div
        className={`form-container h-full w-3/5 ${
          currentPage === 'login' ? 'slide-left' : 'slide-right'
        }`}
      >
        {currentPage === 'login' ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export { Authentication };
