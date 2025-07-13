"use client";
import { useEffect, useRef } from "react";
import content from "@content/home.json";

const Banner = ({ data }) => {
  const { b_l_icon, b_c_icon, monkey3d } = content.banner;
  const videoRefs = useRef([]);

  useEffect(() => {
    // Force autoplay for Safari
    const videos = videoRefs.current;
    videos.forEach((video) => {
      if (video) {
        // Set muted and playsInline for Safari
        video.muted = true;
        video.playsInline = true;

        // Try to play the video
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay started successfully
              console.log('Video autoplay started');
            })
            .catch((error) => {
              // Autoplay was prevented, try again on user interaction
              console.log('Autoplay prevented:', error);

              const handleUserInteraction = () => {
                video.play().catch(console.error);
                document.removeEventListener('touchstart', handleUserInteraction);
                document.removeEventListener('click', handleUserInteraction);
              };

              document.addEventListener('touchstart', handleUserInteraction);
              document.addEventListener('click', handleUserInteraction);
            });
        }
      }
    });
  }, []);

  return (
    <div className="bg-tcs-black rounded-[35px] p-4 h-[500px] sm:h-[820px] sm:p-10 pt-20 sm:pt-56 grid">
      <h1 className="text-center">
        <div className="relative h-[320px] overflow-hidden">
          <div className="absolute w-full pt-1.5">
            <h2 className="max-h-[220px] overflow-hidden font-helvetica-neue-extra-regular tracking-normal text-5xl lg:text-[108px] max-w-[250px] sm:max-w-5xl mx-auto leading-[55px] sm:leading-none text-tcs-pure-white uppercase">
              <span className="relative  animate-plateUp">
                {data?.mainTitle}
              </span>
            </h2>
            <p className="max-h-[120px] overflow-hidden font-helvetica-neue-regular mt-4 md:leading-[30px] max-w-[200px] sm:max-w-md mx-auto text-[17px] sm:text-[25px] text-tcs-pure-white ">
              <span className=" relative animate-plateDown">
                {data?.subtitles}
              </span>
            </p>
          </div>
        </div>
      </h1>
      <div className="relative ">
        <video
          ref={(el) => (videoRefs.current[0] = el)}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className={`r-transition z-30  absolute hover:scale-110 w-[60px] sm:w-[207px] right-[19%] sm:right-[35%] md:right-[39%] lg:right-[41%] 3xl:right-[44%] -top-[355px] sm:-top-[490px] lg:-top-[470px]`}
        >
          <source src="/image/Keyframe.mov" type="video/quicktime" />
          <source src="/image/Keyframe.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative ">
        <video
          ref={(el) => (videoRefs.current[1] = el)}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className={`r-transition absolute hover:scale-110 w-[90px] sm:w-[220px] md:w-[350px] 2xl:w-[374px] -left-[5%] sm:-left-[12%] lg:-left-5 xl:left-24 2xl:left-36 3xl:left-[13%] -top-[230px] sm:-top-[409px] md:-top-[450px] lg:-top-[295px]`}
        >
          <source src="/image/Star.mov" type="video/quicktime" />
          <source src="/image/Star.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative ">
        <video
          ref={(el) => (videoRefs.current[2] = el)}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className={`r-transition brightness-90 absolute hover:scale-110 w-[110px] sm:w-[250px] md:w-[350px] lg:w-[450px] -right-[8%] sm:-right-[12%] lg:-right-[70px] xl:right-10 2xl:right-20 3xl:right-32 -top-[250px] sm:-top-[419px] md:-top-[470px] lg:-top-[325px]`}
        >
          <source src="/image/Monkeyvid2.mov" type="video/quicktime" />
          <source src="/image/Monkeyvid.webm" type="video/webm" />
        </video>
      </div>
      <div className="grid grid-cols-3 justify-between items-end">
        <img
          src={b_l_icon}
          className="r-transition h-6 sm:h-7  mx-auto sm:mx-0 hover:scale-[1.05]"
        />
        <img
          src={b_c_icon}
          className="r-transition h-9 sm:h-10 mx-auto hover:scale-125 hover:translate-y-1"
        />
      </div>
    </div>
  );
};

export default Banner;
