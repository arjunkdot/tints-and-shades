import React from "react";
import Header from "./Header";
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="container max-w-4xl mx-auto mt-24 px-10 font-fira antialiased">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
