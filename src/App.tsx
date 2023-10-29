import React, { useState, useEffect } from "react";
import ColorBlock from "./components/ColorBlock";
import { MdOutlineShuffle, MdOpenInNew } from "react-icons/md";
import Cookies from "js-cookie";
import Layout from "./layout/Layout";
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
    <div className={`${darkMode ? "dark" : ""}`}>
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
          className={`flex flex-wrap items-stretch mt-1  min-h-[calc(100vh_-_65px)] md:min-h-[calc(100vh_-_85px)] ${
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
            <Modal
              className={`${darkMode && "dark"}`}
              dismissMethod={setShowInfo}>
              <div className="border-b border-slate-300 dark:border-slate-600 dark:text-slate-50 w-full py-4">
                <h1 className="text-lg font-plex">Tints + Shades</h1>
              </div>
              <div className="font-plex py-4">
                <p className="dark:text-slate-50">
                  This tool helps you generate tints and shades for a given hex
                  color.
                </p>
                <h2 className="py-2 mt-4 font-bold dark:text-slate-50">
                  Usage
                </h2>
                <ol className="list-decimal pl-5 dark:text-slate-50">
                  <li className="py-1">
                    Input a hex color code either by typing it in manually or by
                    using the color picker available at the top panel.
                  </li>
                  <li className="py-1">
                    Choose a percentage value by which the tints and shades
                    should be generated. You can select any value from 1 to 100.
                  </li>
                  <li className="py-1">
                    Hit 'Return' to generate the tints and shades, or use the
                    'Shuffle' (
                    <MdOutlineShuffle className="inline" />) button to select a
                    random color.
                  </li>
                </ol>
                <h2 className="py-2 mt-4 font-bold dark:text-slate-50">
                  Credits
                </h2>
                <ol className="list-decimal pl-5 dark:text-slate-50">
                  <li className="py-1">
                    Tints &amp; shades provided by{" "}
                    <a
                      href="https://github.com/arjunkdot/hexashades"
                      target="_blank"
                      className="underline text-slate-600 dark:text-slate-400">
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
                      className="underline text-slate-600 dark:text-slate-400">
                      React Icons <MdOpenInNew className="inline" />
                    </a>
                    .
                  </li>
                </ol>
                <p className="pt-1 dark:text-slate-50">
                  A list of additional tools &amp; technologies used can be
                  found{" "}
                  <a
                    href="https://github.com/arjunkdot/tints-and-shades#credits"
                    target="_blank"
                    className="underline text-slate-600  dark:text-slate-400">
                    here <MdOpenInNew className="inline" />
                  </a>
                  .
                </p>

                <hr className="block my-4" />
                <ul className="md:flex md:items-center md:justify-between dark:text-slate-50">
                  <li className="md:mr-2 mb-2 md:mb-0">
                    <a
                      href="https://github.com/arjunkdot/tints-and-shades/"
                      target="_blank"
                      className="underline text-slate-600 dark:text-slate-400">
                      GitHub <MdOpenInNew className="inline" />
                    </a>
                  </li>
                  <li className="mr-2">
                    Designed &amp; built by&nbsp;
                    <a
                      href="https://github.com/arjunkdot/"
                      target="_blank"
                      className="underline text-slate-600 dark:text-slate-400">
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
    </div>
  );
}

export default App;
