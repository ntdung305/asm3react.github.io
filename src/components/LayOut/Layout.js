import React from "react";
import { Fragment } from "react";
import MainNav from "./MainNav";
import classes from "./Layout.module.css";
import Banner from "../Banner/Banner";
import Category from "../category/Category";
import Trending from "../trending/Trending";
import Info from "../Info/Info";
import Contact from "../Info/Contact";

const Layout = () => {
  return (
    <Fragment>
      <MainNav />
      <main className={classes.main}>
        <Banner />
        <Category />
        <Trending />
        <Info />
        <Contact />
      </main>
    </Fragment>
  );
};
export default Layout;
