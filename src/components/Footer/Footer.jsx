import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <nav className={classes.footer__nav}>
          <ul className={classes.footer__ul}>
            <li>
              <h3>FOOTER</h3>
            </li>
            <li className={classes.footer__li}>
              <Link className={classes.footer__link} to={'/'}>Main</Link>
            </li>
            <li className={classes.footer__li}>
              <Link className={classes.footer__link} to={'/'}>Porducts</Link>
            </li>
            <li className={classes.footer__li}>
              <Link className={classes.footer__link} to={'/'}>Contact</Link>
            </li>
            <li className={classes.footer__li}>
              <Link className={classes.footer__link} to={'/'}>About</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
