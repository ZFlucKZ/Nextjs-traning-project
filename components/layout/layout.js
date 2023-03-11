import React, { Fragment } from "react";
import MainHeader from "./main-header";

const Layout = (props) => {
  //   console.log(props.children);
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
