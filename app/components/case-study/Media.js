import React, { useState, useRef } from "react";

const Media = ({ type, url, style }) => {
  const [isMuted, setIsMuted] = useState(true); // State to manage mute status
  const videoRef = useRef(null); // Ref to access the video element
  console.log(url);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {type === "Video" ? (
        <div className="relative">
          <video
            ref={videoRef}
            className={style}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            src={url}
            controls={false}
          ></video>
          <div
            onClick={toggleMute}
            className="absolute bottom-[12px] sm:bottom-[24px] z-50 right-[12px] sm:right-[24px] flex items-center justify-center bg-tcs-banana group sm:hover:bg-tcs-pure-black size-[24px] sm:size-8 cursor-none r-transition  rounded-[50%] "
          >
            {isMuted ? (
              <span className="pl-0.5" role="img" aria-label="Muted">
                <img
                  className="size-4 sm:size-5 block sm:group-hover:hidden"
                  src="/image/icon/silent.png"
                />
                <img
                  className="size-4 sm:size-5 hidden sm:group-hover:block"
                  src="/image/icon/silent-y.png"
                />
              </span>
            ) : (
              <span className="pl-0.5" role="img" aria-label="Unmuted">
                <img
                  className="size-4 sm:size-5 sm:group-hover:hidden"
                  src="/image/icon/volume.png"
                />
                <img
                  className="size-4 sm:size-5 hidden sm:group-hover:block"
                  src="/image/icon/volume-y.png"
                />
              </span>
            )}
          </div>
        </div>
      ) : (
        <img className={style} src={url} alt="Media content" />
      )}
    </>
  );
};

export default Media;
