import React from "react";
//originally imported useState
import { Footer, FooterLink } from "./FooterElements";

const TheFooter = () => {
  return (
    <>
      <Footer>
        <FooterLink to="/about-us" activestyle="true">
          Contact Us
        </FooterLink>
      </Footer>
    </>
  );
};

export default TheFooter;
