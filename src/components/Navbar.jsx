import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="flex justify-between mx-20 pt-5">
      <div className="text-4xl text-blue-600">CJAY</div>

      <div className="flex items-center space-x-4 font-semibold uppercase">
        <svg
          onClick={toggleTheme}
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            className={`${theme === 'theme-light' ? 'block' : 'hidden'}`}
            d="M10 2v16a8 8 0 100-16zm0 18a10 10 0 110-20 10 10 0 010 20z"
          />
          <path
            className={`${theme === 'theme-light' ? 'hidden' : 'block'}`}
            d="M10 13a3 3 0 110-6 3 3 0 010 6zM9 4a1 1 0 112 0 1 1 0 11-2 0zm4.54 1.05a1 1 0 111.41 1.41 1 1 0 11-1.41-1.41zM16 9a1 1 0 110 2 1 1 0 110-2zm-1.05 4.54a1 1 0 11-1.41 1.41 1 1 0 111.41-1.41zM11 16a1 1 0 11-2 0 1 1 0 112 0zm-4.54-1.05a1 1 0 11-1.41-1.41 1 1 0 111.41 1.41zM4 11a1 1 0 110-2 1 1 0 110 2zm1.05-4.54a1 1 0 111.41-1.41 1 1 0 11-1.41 1.41z"
          />
        </svg>
        <Link to="/">Projects</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
