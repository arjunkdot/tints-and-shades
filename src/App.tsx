import React, { useState, useEffect } from "react";
import ColorBlock from "./components/ColorBlock";
import { MdOutlineShuffle, MdOpenInNew } from "react-icons/md";
import Layout from "./layout/layout";
import Cookies from "js-cookie";
import Modal from "./components/Modal";
function App() {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("");
  const [isolateColor, setIsolateColor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
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
      setDarkMode={setDarkMode}
      showInfo={showInfo}
      setShowInfo={setShowInfo}>
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
        {showInfo && (
          <Modal dismissMethod={setShowInfo}>
            <div className="border-b border-slate-300 dark:border-slate-600 w-full py-4">
              <h1 className="text-lg font-plex">Color Picker</h1>
            </div>
            <div className="font-plex py-4">
              <p>
                This tool helps you generate tints and shades for a given hex
                color.
              </p>
              <h2 className="py-2 mt-4 font-bold">Usage</h2>
              <ol className="list-decimal pl-5">
                <li className="py-1">
                  Input a hex color code either typing in manually or by using
                  the color picker available at the top panel.
                </li>
                <li className="py-1">
                  Choose a percentage value by which the tints and shades should
                  be generated. You can choose any value from 1 to 100.
                </li>
                <li className="py-1">
                  Hit return to generate the tints & shades. Use the shuffle (
                  <MdOutlineShuffle className="inline" />) button to choose a
                  random color.
                </li>
              </ol>
              <h2 className="py-2 mt-4 font-bold">Credits</h2>
              <ol className="list-decimal pl-5">
                <li className="py-1">
                  Tints &amp; shades provided by{" "}
                  <a
                    href="https://github.com/arjunkdot/hexashades"
                    target="_blank"
                    className="underline text-slate-600">
                    {" "}
                    Hexashades <MdOpenInNew className="inline" />
                  </a>
                  .
                </li>
                <li className="py-1">
                  Icon courtesy{" "}
                  <a
                    href="https://react-icons.github.io/react-icons/"
                    target="_blank"
                    className="underline text-slate-600">
                    React Icons <MdOpenInNew className="inline" />
                  </a>
                  .
                </li>
              </ol>
              <p className="pt-1">
                A list of additional tools &amp; technologies used can be found{" "}
                <a
                  href="https://github.com/arjunkdot/shades-and-tints#credits"
                  target="_blank"
                  className="underline text-slate-600">
                  here <MdOpenInNew className="inline" />
                </a>
                .
              </p>

              <hr className="block my-4" />
              <ul className="md:flex md:items-center md:justify-between">
                <li className="md:mr-2 mb-2 md:mb-0">
                  <a
                    href="https://github.com/arjunkdot/shades-and-tints/"
                    target="_blank"
                    className="underline text-slate-600">
                    GitHub <MdOpenInNew className="inline" />
                  </a>
                </li>
                <li className="mr-2">
                  Designed &amp; built by&nbsp;
                  <a
                    href="https://github.com/arjunkdot/"
                    target="_blank"
                    className="underline text-slate-600">
                    arjunkdot <MdOpenInNew className="inline" />
                  </a>
                  &nbsp;available under MIT license.
                </li>
              </ul>
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  );
}

export default App;
