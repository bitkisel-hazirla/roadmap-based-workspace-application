import React from 'react';
import { AuthButton } from '../../components/UI/AuthButton';
import { PasswordInput } from '../../components/UI/PasswordInput';

function SignUp() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <form className="login-form h-3/5 flex flex-col justify-center items-center">
        <h1 className="mb-16">Create Account</h1>
        <div className="input-container w-full max-w-2xl mb-16">
          <input
            className="w-full mb-8 py-3 px-5 border border-gray-500 rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="w-full mb-8 py-3 px-5 border border-gray-500 rounded"
            type="text"
            id="username"
            name="name"
            placeholder="Username"
            required
          />
          <input
            className="w-full mb-8 py-3 px-5 border border-gray-500 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <PasswordInput className={'mb-8'}/>
          <input
            className="w-full py-3 px-5 border border-gray-500 rounded"
            type="date"
            id="date"
            name="date"
            max="2999-12-30"
            required
          />
        </div>
        <AuthButton theme="secondary">Sign Up</AuthButton>
      </form>
    </div>
  );
}

export { SignUp };
