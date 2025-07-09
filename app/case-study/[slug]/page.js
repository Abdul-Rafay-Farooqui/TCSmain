"use client";
import Media from "@/app/components/case-study/Media";
import { useCursorColor } from "@/app/context/CursorContext";
import { getCaseStudyData } from "@/lib/case-study";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";

const CaseStudy = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [fgColor, setFgColor] = useState("#000000");
  const { setBgColor, fgColorMain, setFgColorMain } = useCursorColor();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCaseStudyData(slug);
        if (res?.main?.fields?.backgroundColor) {
          setBgColor(res?.main?.fields?.backgroundColor);
        }
        if (res?.main?.fields?.foregroundColor) {
          setFgColor(res?.main?.fields?.foregroundColor);
          setFgColorMain(res?.main?.fields?.foregroundColor);
        }
        setData(res?.main?.fields);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [slug, fgColor]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center my-60">
          <div className="animate-spin rounded-full border-4 border-t-4 border-tcs-black border-t-tcs-banana w-16 h-16"></div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="pt-40 leading-tight text-center text-tcs-white text-3xl lg:text-[110px] tracking-normal mx-auto font-helvetica-neue-medium max-w-[1000px]">
            <div className="flex justify-center">
              <p className="lg:mr-5" style={{ color: fgColor }}>
                {data?.title}
              </p>
            </div>
            <div
              className="flex mt-[100px] flex-wrap sm:mt-28 tracking-wide justify-center font-light text-[9.5px] lg:text-sm font-helvetica-neue-regular"
              style={{ color: fgColor }}
            >
              {data?.services?.map((tag, i) => (
                <p key={i} className="px-1 uppercase whitespace-nowrap">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          {/* Section1 */}
          <div>
            {(data?.section1Media1File || data?.section1Media1Link) && (
              <div className="ml-2 lg:ml-[90px] mr-2 lg:mr-[70px] mt-2 max-w-full max-h-[800px] rounded-3xl ">
                <Media
                  type={data?.section1Media1Type}
                  url={
                    data?.section1Media1File?.fields?.file?.url ||
                    data?.section1Media1Link
                  }
                  style="w-full object-cover sm:h-[800px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            <div className="sm:flex relative py-10 sm:pt-32 sm:pb-16 sm:justify-between justify-center mb-10 px-0 lg:px-28 xl:px-44 2xl:px-44">
              <div className="sm:sticky top-0 z-[99999999] pt-4 ml-4 sm:max-h-screen sm:w-[40%] 3xl:w-[35%]">
                <h3
                  className=" text-3xl lg:text-4xl font-light"
                  style={{ color: fgColor }}
                >
                  {data?.section1Title}
                </h3>
                <ul className="text-xs mt-5">
                  {data?.section1List?.map((item, i) => (
                    <li key={i} className="text-xs" style={{ color: fgColor }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className=" case-study-content pt-4   ml-4 lg:ml-16 mr-4 lg:mr-0 mt-6 sm:mt-1 sm:w-1/2 sm:text-justify h-auto"
                style={{ color: fgColor }}
              >
                {documentToReactComponents(data?.section1Content)}
              </div>
            </div>
          </div>
          {/* Section2 */}
          <div>
            {(data?.section2Media1File || data?.section2Media1Link) && (
              <div className="ml-2 lg:ml-[90px] mb-0 mr-2 lg:mr-[70px] mt-4 max-w-full max-h-[800px] rounded-3xl ">
                <Media
                  type={data?.section2Media1Type}
                  url={
                    data?.section2Media1File?.fields?.file?.url ||
                    data?.section2Media1Link
                  }
                  style="w-full object-cover sm:h-[800px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            {(data?.section2Media2File || data?.section2Media2Link) &&
              (data?.section2Media3File || data?.section2Media3Link) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 ml-2 mr-2 lg:mr-[70px] lg:mx-5 mt-4 lg:max-w-full lg:ml-[90px] lg:max-h-[672px]">
                  <div className="sm:h-[672px] mb-5 lg:mb-0">
                    <Media
                      type={data?.section2Media2Type}
                      url={
                        data?.section2Media2File?.fields?.file?.url ||
                        data?.section2Media2Link
                      }
                      style="object-cover w-full sm:size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                  <div className="sm:h-[672px] ">
                    <Media
                      type={data?.section2Media3Type}
                      url={
                        data?.section2Media3File?.fields?.file?.url ||
                        data?.section2Media3Link
                      }
                      style="object-cover size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                </div>
              )}
            <div className="sm:flex relative py-10 sm:pt-32 sm:pb-16 sm:justify-between justify-center px-2 lg:px-28 xl:px-44 2xl:px-44">
              <div className="sm:sticky top-0 pt-4 z-[99999999] sm:max-h-screen ml-4 sm:w-[40%] 3xl:w-[35%]">
                <h3 className="text-3xl font-light`" style={{ color: fgColor }}>
                  {data?.section2Title}
                </h3>
              </div>
              <div
                className="ml-4 pt-4 lg:ml-16 mr-4 lg:mr-0 mt-6 sm:mt-1 sm:text-justify h-auto case-study-content sm:w-[40%] 3xl:w-[35%]"
                style={{ color: fgColor }}
              >
                {documentToReactComponents(data?.section2Content)}
              </div>
            </div>
          </div>
          {/* Section3 */}
          <div>
            {(data?.section3Media1File || data?.section3Media1Link) && (
              <div className="ml-2 lg:ml-[90px] mb-0 mr-2 lg:mr-[70px] mt-4 max-w-full max-h-[800px] rounded-3xl ">
                <Media
                  type={data?.section3Media1Type}
                  url={
                    data?.section3Media1File?.fields?.file?.url ||
                    data?.section3Media1Link
                  }
                  style="w-full object-cover sm:h-[800px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            {(data?.section3Media2File || data?.section3Media2Link) && (
              <div className="ml-2 lg:ml-[90px] mb-0 mr-2 lg:mr-[70px] mt-4 max-w-full max-h-[550px] rounded-3xl ">
                <Media
                  type={data?.section3Media2Type}
                  url={
                    data?.section3Media2File?.fields?.file?.url ||
                    data?.section3Media2Link
                  }
                  style="w-full object-cover sm:h-[550px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            {(data?.section3Media3File || data?.section3Media3Link) && (
              <div className="ml-2 lg:ml-[90px] mb-0 mr-2 lg:mr-[70px] mt-4 max-w-full max-h-[800px] rounded-3xl ">
                <Media
                  type={data?.section3Media3Type}
                  url={
                    data?.section3Media3File?.fields?.file?.url ||
                    data?.section3Media3Link
                  }
                  style="w-full object-cover sm:h-[800px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            <div className="sm:flex relative py-10 sm:pt-32 sm:pb-16 sm:justify-between justify-center px-2 sm:px-10 lg:px-28 xl:px-44 2xl:px-44">
              <div className="sm:sticky pt-4 top-0 z-[99999999] sm:max-h-screen ml-4 sm:w-[40%] 3xl:w-[35%]">
                <h3 className="text-3xl font-light" style={{ color: fgColor }}>
                  {data?.section3Title}
                </h3>
              </div>
              <div
                className=" ml-4 pt-4 lg:ml-16 mr-4 lg:mr-0 mt-6 sm:mt-1 sm:w-[40%] 3xl:w-[35%] sm:text-justify h-auto case-study-content"
                style={{ color: fgColor }}
              >
                {documentToReactComponents(data?.section3Content)}
              </div>
            </div>
          </div>
          {/* Section4 */}
          <div>
            {(data?.section4Media1File || data?.section4Media1Link) && (
              <div className="ml-2 lg:ml-[90px] mb-0 mr-2 lg:mr-[70px] mt-4 max-w-full max-h-[800px] rounded-3xl ">
                <Media
                  type={data?.section4Media1Type}
                  url={
                    data?.section4Media1File?.fields?.file?.url ||
                    data?.section4Media1Link
                  }
                  style="w-full object-cover sm:h-[800px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            {(data?.section4Media2File || data?.section4Media2Link) &&
              (data?.section4Media3File || data?.section4Media3Link) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 ml-2 mr-2 lg:mr-[70px] lg:mx-5 mt-4 lg:ml-[90px] lg:max-h-[840px]">
                  <div className="sm:h-[841px] mb-5 lg:mb-0">
                    <Media
                      type={data?.section4Media2Type}
                      url={
                        data?.section4Media2File?.fields?.file?.url ||
                        data?.section4Media2Link
                      }
                      style="object-cover sm:size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                  <div className="lg:sm:h-[841px] ">
                    <Media
                      type={data?.section4Media3Type}
                      url={
                        data?.section4Media3File?.fields?.file?.url ||
                        data?.section4Media3Link
                      }
                      style="object-cover size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                </div>
              )}
          </div>
          {/* Section5 */}
          <div>
            {(data?.section5Media1File || data?.section5Media1Link) && (
              <div className="ml-2 lg:ml-[90px] mb-0 mr-2 lg:mr-[70px] mt-4 max-w-full max-h-[800px] rounded-3xl ">
                <Media
                  type={data?.section5Media1Type}
                  url={
                    data?.section5Media1File?.fields?.file?.url ||
                    data?.section5Media1Link
                  }
                  style="w-full object-cover sm:h-[800px] rounded-[15px] sm:rounded-[33px]"
                />
              </div>
            )}
            {(data?.section5Media2File || data?.section5Media2Link) &&
              (data?.section5Media3File || data?.section5Media3Link) && (
                <div className="flex gap-4 ml-2 mr-2 lg:mr-[70px] lg:mx-5 mt-4 lg:max-w-full lg:ml-[90px] lg:max-h-[575px]">
                  <div className="sm:w-[40%]">
                    <Media
                      type={data?.section5Media2Type}
                      url={
                        data?.section5Media2File?.fields?.file?.url ||
                        data?.section5Media2Link
                      }
                      style="object-cover size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                  <div className="sm:w-[60%] ">
                    <Media
                      type={data?.section5Media3Type}
                      url={
                        data?.section5Media3File?.fields?.file?.url ||
                        data?.section5Media3Link
                      }
                      style="object-cover size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                </div>
              )}
            {(data?.section5Media4File || data?.section5Media4Link) &&
              (data?.section5Media5File || data?.section5Media5Link) && (
                <div className="flex gap-4 ml-2 mr-2 lg:mr-[70px] lg:mx-5 mt-4 lg:max-w-full lg:ml-[90px] lg:max-h-[575px]">
                  <div className="sm:w-[60%]">
                    <Media
                      type={data?.section5Media4Type}
                      url={
                        data?.section5Media4File?.fields?.file?.url ||
                        data?.section5Media4Link
                      }
                      style="object-cover w-full sm:size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                  <div className="sm:w-[40%] ">
                    <Media
                      type={data?.section5Media5Type}
                      url={
                        data?.section5Media5File?.fields?.file?.url ||
                        data?.section5Media5Link
                      }
                      style="object-cover size-full rounded-[15px] sm:rounded-[33px]"
                    />
                  </div>
                </div>
              )}

            <div className="sm:grid place-items-center">
              <div
                className="my-14 lg:my-[165px] text-center text-3xl lg:text-[36px] leading-tight font-light ml-3 max-w-xl"
                style={{ color: fgColor }}
              >
                <p>{data?.bottomText}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
