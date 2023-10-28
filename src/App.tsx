import React, { useState, useEffect } from "react";
import ColorBlock from "./components/ColorBlock";
import Layout from "./layout/layout";
import Cookies from "js-cookie";

function App() {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const [isolateColor, setIsolateColor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const middleItem = Math.floor(colors.length / 2);

  useEffect(() => {
    if (Cookies.get("ts_isolate")) {
      setIsolateColor(true);
    } else {
      setIsolateColor(false);
    }
  }, [isolateColor]);

  return (
    <Layout
      currentColor={currentColor}
      setCurrentColor={setCurrentColor}
      setColors={setColors}
      isolateColor={isolateColor}
      setIsolateColor={setIsolateColor}
      darkMode={darkMode}
      setDarkMode={setDarkMode}>
      <div
        className={`flex flex-wrap items-stretch mt-1 min-h-[calc(100vh_-_85px)] ${
          isolateColor ? "gap-1" : ""
        }`}>
        {colors.map((color, index) => {
          return (
            <ColorBlock
              isCurrentColor={index === middleItem}
              color={color}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default App;
