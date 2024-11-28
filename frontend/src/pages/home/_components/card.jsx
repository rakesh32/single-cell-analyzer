import React from 'react';

const Card = ({ title, desc, imgUrl, videoUrl }) => {
  return (
    <div className="bg-[#f7f9fc] min-h-[20em] max-w-[20em] p-4 flex flex-col gap-4">
      <h1 className="text-black font-bold text-2xl">{title}</h1>
      <span className="text-lg">{desc}</span>
      {imgUrl && <img src={imgUrl} alt="" />}
      {videoUrl && <video src={videoUrl} loop autoPlay muted />}
    </div>
  );
};

export default Card;
