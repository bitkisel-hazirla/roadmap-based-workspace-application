import React, { useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { AuthSection } from '../../components/UI/AuthSection';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Authentication() {
  const [currentPage, setCurrentPage] = useState('signin');

  const handlePageChange = () => {
    setCurrentPage(currentPage === 'signin' ? 'signup' : 'signin');
  };

  const flexDirection = currentPage === 'signin' ? 'flex-row-reverse' : 'flex-row';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={`authPage w-screen h-screen flex ${flexDirection}`}>
        <AuthSection currentPage={currentPage} handleClick={handlePageChange} />
        <div
          className={`form-container h-full w-3/5 ${
            currentPage === 'signin' ? 'slide-left' : 'slide-right'
          }`}
        >
          {currentPage === 'signin' ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </LocalizationProvider>
  );
}

export { Authentication };
