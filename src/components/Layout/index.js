import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="desktop:w-10/12 mx-auto mobile:w-11/12">{children}</div>
    </div>
  );
};

export default Layout;
