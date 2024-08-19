/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Certifications = () => {
  const certifications = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/59db17c4e8d1d8e53432b9c886ec91b61091caa3285ef6056a536ad6f26cd50d?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&",
      text: "Licensed by the Central Bank of Nigeria",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b9f702e393e7165209ba821064ed809619c21429f9e8ff7373c5c298b7b261c?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&",
      text: "NDIC Insured Savings and Deposit",
    },
  ];

  return (
    <section className="certifications">
      {certifications.map((cert, index) => (
        <div key={index} className="certification-item">
          <img
            loading="lazy"
            src={cert.image}
            alt={cert.text}
            className="certification-icon"
          />
          <p className="certification-text">{cert.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
