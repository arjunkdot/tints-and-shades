import React, { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import ColorInput from "./components/ColorInput";
import Layout from "./layout/layout";

function App() {
  const [shadesAndTints, setShadesAndTints] = useState([]);
  return (
    <Layout>
      <ColorInput setShadesAndTints={setShadesAndTints} />

      <div className="grid gap-2 grid-cols-6 mt-8">
        {shadesAndTints.map((color, index) => {
          return <ColorBlock color={color} key={index} />;
        })}
      </div>
    </Layout>
  );
}

export default App;
