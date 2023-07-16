import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <nav className={classes.header__nav}>
          <ul className={classes.header__ul}>
            <li className={classes.header__li}>
              <img className={classes.header__logo} src={logo} alt="logo" />
            </li>
            <li className={classes.header__li}>
              <Link className={classes.header__link} to={'/'}>Main</Link>
            </li>
            <li className={classes.header__li}>
              <Link className={classes.header__link} to={'/'}>Products</Link>
            </li>
            <li className={classes.header__li}>
              <Link className={classes.header__link} to={'/'}>Contact</Link>
            </li>
            <li className={classes.header__li}>
              <Link className={classes.header__link} to={'/'}>About</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
