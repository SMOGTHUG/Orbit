/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Link from "./Link";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const links = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Resources", href: "#", hasDropdown: true },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <div className="logo-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d111cc5830b99c408ed24af9875a115ea9a1d80b78accc05157bf21a71de638?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              className="logo-icon"
              alt="Company icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d36301d320de3de3ef026aace40b26541c8950ce5b9061f445a38a0f1c35e8?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              className="logo-text"
              alt="Company name"
            />
          </div>
          <nav className="navigation">
            <ul className="nav-links">
              {links.map((link, index) => (
                <li key={index}>
                  <Link {...link} />
                </li>
              ))}
            </ul>
            <PrimaryButton text="Sign up" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
