/**
 * This code was generated by Builder.io.
 */
import React from "react";

const SocialLinks = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5693d5e84846a4d243d8eadd3673a247b3a52241a077a61849ccfcee48641fda?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce76321e1d713ec7ae143ab087fce59950e0ff9a6e0dd0ab6b9a9a8a30f5462c?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/91bc72c4c4680d03c9f5bcad3db16e9cdc4ec81481ca3b27669a8855d707dc0c?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fec44d964fe7f4248d516e4551c405863e580e5787c0024acebed0516dbb508b?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="social-links">
      <h3 className="block-heading">Follow us</h3>
      <div className="social-icons">
        {socialIcons.map((icon, index) => (
          <a href="#" key={index} className="social-icon-link">
            <img
              loading="lazy"
              src={icon.src}
              className="social-icon"
              alt={icon.alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
