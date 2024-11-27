import React from 'react';

const HomeBanner = () => {
  return (
    <div className="bg-[#0043a4] flex flex-col justify-between px-[20em]  pt-[6em] min-h-[20em]">
      <div className="flex justify-between gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-[#a1d2aa] font-bold text-2xl">Single Cell</span>
          <h1 className="text-white text-6xl font-bold max-w-[8em]">
            Single cell built for your success
          </h1>
        </div>
        <div>
          <img
            src="/images/chromium-brand.jpg"
            className="w-[32em] h-[36em] m-0 p-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
