/**
 * This code was generated by Builder.io.
 */
import React from "react";

const FooterLinks = ({ title, links }) => (
  <div className="footer-link-block">
    <h3 className="block-heading">{title}</h3>
    <ul className="footer-link-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="footer-link">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
