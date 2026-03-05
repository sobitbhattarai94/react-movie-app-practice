import React from "react";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm p-4 border border-purple-800/30 rounded-xl shadow-xl animate-pulse md:p-6 bg-purple-900/20"
    >
      {/* Poster area */}
      <div
        className="flex items-center justify-center h-64 max-w-sm bg-purple-800/40 rounded-xl mb-4 sm:mb-6"
      >
        <svg
          className="w-12 h-12 text-purple-600/50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"
          />
        </svg>
      </div>
      
      {/* Title & Description Lines */}
      <div className="h-3 bg-purple-800/50 rounded-full w-48 mb-4"></div>
      <div className="h-2.5 bg-purple-800/30 rounded-full mb-2.5"></div>
      <div className="h-2.5 bg-purple-800/30 rounded-full mb-2.5"></div>
      <div className="h-2.5 bg-purple-800/30 rounded-full w-2/3"></div>
      
      {/* Bottom Profile/Info Section */}
      <div className="flex items-center mt-6">
        <div className="w-10 h-10 bg-purple-800/40 rounded-full me-3"></div>
        <div>
          <div className="h-2.5 bg-purple-800/50 rounded-full w-32 mb-2"></div>
          <div className="w-20 h-2 bg-purple-800/30 rounded-full"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
