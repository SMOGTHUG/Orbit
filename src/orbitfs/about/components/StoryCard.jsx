import React from 'react';

function StoryCard({ imageSrc, title, description }) {
  return (
    <article className="story-card">
      <img src={imageSrc} alt="" className="card-icon" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <style jsx>{`
        .story-card {
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          font-family: Effra, sans-serif;
          overflow: hidden;
          padding: 41px 47px;
          width: 100%;
        }
        .card-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100px;
        }
        .card-content {
          display: flex;
          flex-direction: column;
          margin-top: 32px;
        }
        .card-title {
          color: var(--Orbit-Color-Style-Slate---Neutral-slate---neutral-800, #0f172a);
          font-size: 24px;
          font-weight: 500;
          line-height: 2;
        }
        .card-description {
          color: var(--Orbit-Color-Style-Slate---Neutral-slate---neutral-800, #0f172a);
          font-feature-settings: "cv01" on, "cv03" on, "cv04" on;
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          margin-top: 16px;
        }
        @media (max-width: 991px) {
          .story-card {
            margin-top: 33px;
            padding: 20px;
          }
        }
      `}</style>
    </article>
  );
}

export default StoryCard;