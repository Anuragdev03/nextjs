import React from "react";
import SideNav from "./SideNav";

interface Proptype {
  children: React.ReactNode;
}
const Layout = (props: Proptype) => {
  return (
    <div style={{ display: "flex"}}>
      <SideNav />
      {props.children}
    </div>
  );
};

export default Layout;
