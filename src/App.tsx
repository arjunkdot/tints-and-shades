import React, { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import ColorInput from "./components/ColorInput";
import Layout from "./layout/layout";

function App() {
  const [shadesAndTints, setShadesAndTints] = useState([]);
 
  return (
    <Layout>
      <ColorInput setShadesAndTints={setShadesAndTints} />

      <div className="flex flex-wrap gap-2 my-8">
        {shadesAndTints.map((color, index) => {
          return <ColorBlock color={color} key={index} />;
        })}
      </div>
    </Layout>
  );
}

export default App;
