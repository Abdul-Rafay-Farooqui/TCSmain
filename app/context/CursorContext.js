"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CursorColorContext = createContext();

export const CursorColorProvider = ({ children }) => {
  const [cursorColor, setCursorColor] = useState("border-tcs-banana"); // Default color
  const [bgColor, setBgColor] = useState("#000000");
  const [fgColorMain, setFgColorMain] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <CursorColorContext.Provider
      value={{
        cursorColor,
        setCursorColor,
        bgColor,
        setBgColor,
        fgColorMain,
        setFgColorMain,
      }}
    >
      {children}
    </CursorColorContext.Provider>
  );
};

export const useCursorColor = () => useContext(CursorColorContext);
