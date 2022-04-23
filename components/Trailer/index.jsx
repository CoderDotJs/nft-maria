import React from "react";

const index = () => {
  return (
    <div className="w-full h-56 sm:h-96 lg:h-screen">
      <iframe
        className="w-full h-full bg-slate-100"
        src="https://www.youtube.com/embed/Uvufun6xer8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default index;
