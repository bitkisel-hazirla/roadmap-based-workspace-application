import React from 'react';

function AuthButton({ theme = 'primary', children, onClick, className }) {
  const [bgColor, textColor] = theme === 'primary' ? ['#fff', '#597d9d'] : ['#597d9d', '#fff'];

  return (
    <button
      className={`px-16 py-3 border border-gray-300 ${className} `}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { AuthButton };
