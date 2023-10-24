import React, { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import Layout from "./layout/layout";

function App() {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const middleItem = Math.floor(colors.length / 2);
  return (
    <Layout
      currentColor={currentColor}
      setCurrentColor={setCurrentColor}
      setColors={setColors}>
      <div className="flex flex-wrap items-stretch mt-1 min-h-[calc(100vh_-_85px)]">
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
