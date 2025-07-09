import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const headingText = "Welcome Home!";

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center justify-center px-4">

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#A2D5C6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#CFFFE2] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-200"></div>
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#F6F6F6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Center Card */}
      <div className="z-10 bg-[#F6F6F6] backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-gray-200">
        <h1 className="text-4xl font-extrabold text-[#ff6b6b] mb-8 transition-all duration-500 transform hover:scale-110 hover:text-[#ff4d4d]">
          {headingText}
        </h1>

        <ul className="space-y-6">
          <li>
            <Link
              to="/about"
              className="block w-full bg-[#20c997] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#17b089] active:scale-95 transition-transform duration-300 transform hover:scale-105"
            >
              🚀 Go to About Page
            </Link>
          </li>
          <li>
            <Link
              to="/head-tail"
              className="block w-full bg-[#20c997] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#17b089] active:scale-95 transition-transform duration-300 transform hover:scale-105"
            >
              🎮 Go to Head & Tail Page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
