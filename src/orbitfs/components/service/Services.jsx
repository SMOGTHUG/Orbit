/**
 * This code was generated by Builder.io.
 */
import React from "react";
import "./service.css";
import ServiceCard from "../../components/service/ServiceCard";

const Services = () => {
  const services = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e8d4e90eb6e8a47ee0a997a6c8376d1841478f7198245dd6bfcd8ecfeb18854?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&",
      title: "Access to Affordable Financing",
      description:
        "We offer a variety of loan products, including microloans, working capital loans, and asset financing, with terms and repayment schedules tailored to the cash flow patterns of small businesses.",
      color: "#00327E",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb7a353cc1a4c15e95128aaaf5e08745514e7be3c75042908ff5aa49df6fd6e3?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&",
      title: "Financial Advisory Services",
      description:
        "We offers personalized financial advisory services to help business owners make informed decisions. Our experts provide insights on budgeting, investment opportunities, and financial planning.",
      color: "#020617",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/96288bd85ea40f18de56ac9b02f2f7735f72c569da0d493afb9e3c354693d44e?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&",
      title: "Technology Integration",
      description:
        "We leverage the latest financial technology (fintech) to streamline processes, enhance security, and provide innovative solutions that improve the efficiency and effectiveness of financial services.",
      color: "#427444",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b438e0d2310300ec0e844449d5c8938eba747c4f49dab4391aa2d56eac3ac9f7?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&",
      title: "Customer centric Approach",
      description:
        "We prioritize customer satisfaction by offering personalized service and dedicated support to address the unique needs of each business.",
      color: "#001C45",
    },
  ];

  return (
    <section className="value-proposition">
      <div className="value-content">
        <div className="value-header">
          <h2 className="value-title">Value Proposition</h2>
        </div>
        <div className="value-description">
          <h3 className="value-subtitle">Help First, Sell Second!</h3>
          <p className="value-text">
            Orbit Financial Services Limited (OFSL) differentiates itself by
            offering unique value and meeting specific customer needs with a
            customer-centric approach
          </p>
        </div>
      </div>

      <div className="services">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services
