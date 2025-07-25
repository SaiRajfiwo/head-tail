import React from 'react';

function About() {
  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8">

      {/* Decorative Blobs for Visual Flair */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-[#A2D5C6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 bg-[#CFFFE2] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-200"></div>
      <div className="absolute top-20 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-[#F6F6F6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* About Card */}
      <div className="z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-[#F6F6F6] backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border border-gray-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ff6b6b] mb-4 sm:mb-6 text-center transition-all duration-300 hover:scale-105 hover:text-[#ff4d4d]">
          About This Project
        </h1>

        <p className="text-[#000000] text-sm sm:text-base md:text-lg leading-relaxed">
          This React-based project is crafted to demonstrate routing, dynamic UI handling, and form validation using modern state management techniques. It includes three core pages:
        </p>

        <ul className="list-disc ml-5 sm:ml-6 mt-3 sm:mt-4 text-[#000000] text-sm sm:text-base font-medium space-y-1">
          <li><strong className="text-[#20c997]">Home:</strong> Serves as the main navigation hub.</li>
          <li><strong className="text-[#20c997]">About:</strong> Provides insights about the application’s structure and purpose.</li>
          <li><strong className="text-[#20c997]">Head & Tail:</strong> An interactive logic-driven page that arranges selected values (‘H’ or ‘T’) into dynamic columns based on user input.</li>
        </ul>

        <p className="mt-3 sm:mt-4 text-[#000000] text-sm sm:text-base md:text-lg">
          The app handles dropdown selection with validation, resets the form after each entry, and displays each result in visually distinct columns — helping you practice conditional rendering and state manipulation in React.
        </p>
      </div>
    </div>
  );
}

export default About;
