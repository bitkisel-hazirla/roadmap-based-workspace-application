import React from 'react';

function AuthButton({ theme = 'primary', children, onClick }) {
  const [bgColor, textColor] = theme === 'primary' ? ['#fff', '#597d9d'] : ['#597d9d', '#fff'];

  return (
    <button
      className="px-16 py-3 border border-gray-300 rounded-2xl"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { AuthButton };
