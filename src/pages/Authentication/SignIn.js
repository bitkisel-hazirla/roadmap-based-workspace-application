import React from 'react';
import { AuthButton } from '../../components/UI/AuthButton';
import { PasswordInput } from '../../components/UI/PasswordInput';

function SignIn() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <form className="login-form h-3/5 flex flex-col justify-center items-center">
        <h1 className="mb-16">Sign In To SHELLP</h1>
        <div className="input-container w-full max-w-2xl mb-16">
          <input
            className="w-full mb-10 py-3 px-5 border border-gray-500 rounded"
            type="text"
            id="username"
            name="username"
            placeholder="Email"
            required
          />
          <PasswordInput className={'mb-4'} />

          <div className="flex w-full justify-between">
            <label
              htmlFor="checkbox"
              className="checkbox-label flex items-center text-base cursor-pointer text-gray"
            >
              <input
                id="checkbox"
                type="checkbox"
                className="checkbox-input absolute opacity-0 pointer-events-none"
              />
              <span className="checkbox-icon inline-block w-5 h-5 mr-2.5 rounded border border-gray-500 rounded"></span>
              Remember me
            </label>
            <a href="#">Forgot your password?</a>
          </div>
        </div>
        <AuthButton theme="secondary">Sign In</AuthButton>
      </form>
    </div>
  );
}

export { SignIn };
