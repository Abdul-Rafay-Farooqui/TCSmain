"use client";
import { useEffect, useState } from "react";
import { useCursorColor } from "../context/CursorContext";

const CustomCursor = () => {
  const [cursorColor, setCursorColor] = useState("border-tcs-banana");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Get the element under the cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const classListArray = Object.values(element.classList);
        const extractedValues = classListArray
          ?.filter((word) => word.startsWith("bg-tcs-"))
          ?.map((word) => word.slice("bg-tcs-".length));
        switch (extractedValues[0]) {
          case "black":
            setCursorColor("border-tcs-banana");
            break;
          case "banana":
            setCursorColor("border-tcs-black");
            break;
          case "":
            setCursorColor("border-tcs-black");
            break;
          default:
            setCursorColor("border-tcs-banana");
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`hidden sm:block fixed z-[9999999999999999] size-12 rounded-full ${cursorColor} bg-transparent border-2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none; /* Hide the default cursor */
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
