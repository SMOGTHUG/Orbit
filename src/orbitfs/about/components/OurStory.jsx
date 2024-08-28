import React from 'react';
import StoryCard from './StoryCard';
import { storyData } from './storyData';

function OurStory() {
  return (
    <section className="our-story-section">
      <div className="story-content">
        <h1 className="story-title">Our Story</h1>
        <p className="story-description">
          Since its inception, OFSL has aimed to bridge the gap left by traditional banks, focusing on the underserved market segment of small business owners who lack collateral.
        </p>
      </div>
      <div className="story-cards">
        {storyData.map((item, index) => (
          <StoryCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <style jsx>{`
        .our-story-section {
          background-image: url('../../../images/storybg.png');
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 114px 0;
          width: 100%;
          background-size: cover;
        }
        .story-content {
          align-self: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          font-family: Effra, sans-serif;
          max-width: 944px;
          text-align: center;
          width: 100%;
        }
        .story-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
        }
        .story-description {
          font-size: 24px;
          font-weight: 500;
          line-height: 40px;
          margin-top: 40px;
        }
        .story-cards {
          display: flex;
          gap: 20px;
          margin-top: 52px;
          padding: 100px
        }
        @media (max-width: 991px) {
          .our-story-section {
            padding: 0 20px 100px;
          }
          .story-title {
            font-size: 40px;
          }
          .story-cards {
            flex-direction: column;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}

export default OurStory;