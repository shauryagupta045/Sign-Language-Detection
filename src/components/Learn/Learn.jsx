import React from 'react';
import "./Learn.css";
import s1 from "../../assests/s1.jpg";
import s2 from "../../assests/s2.gif";

const Learn = () => {
  return (
    <div className="learn-container">
      {/* Hero Section */}
      <div className="learn-hero">
        <div className="learn-hero-content">
          <h1 className="gradient__text">Master Sign Language <br /> The Future of Communication</h1>
          <p>
            Start your journey into the world of silent communication.
            Learn the alphabet, practice your gestures, and bridge the gap with Signify.
          </p>
        </div>
        <div className="learn-hero-image">
          <img src={s2} alt="Sign Language Animation" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="learn-chart-section">
        <h2 className="gradient__text">Alphabet Reference Chart</h2>
        <div className="learn-chart-container">
          <img src={s1} alt="Sign Language Alphabet Chart" />
        </div>
      </div>

      {/* Tips Section */}
      <div className="learn-tips-section">
        <h2 className="gradient__text">Tips for Success</h2>
        <div className="learn-tips-grid">
          <div className="learn-tip-card">
            <h3>Practice Daily</h3>
            <p>Consistency is key. Spend at least 15 minutes every day practicing your signs to build muscle memory.</p>
          </div>
          <div className="learn-tip-card">
            <h3>Watch Your Angles</h3>
            <p>Hand positioning is crucial. Ensure your palm faces the correct direction as shown in the chart.</p>
          </div>
          <div className="learn-tip-card">
            <h3>Be Patient</h3>
            <p>Learning a new language takes time. Don't get discouraged if you don't get it right immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;