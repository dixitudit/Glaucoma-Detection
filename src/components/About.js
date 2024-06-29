import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Glaucoma Diagnosis Tool</h1>
      <p>This tool uses a machine learning model to predict the likelihood of glaucoma based on various medical parameters.</p>
      <h2>Features</h2>
      <ul>
        <li>Utilizes state-of-the-art machine learning techniques</li>
        <li>Based on data from a reputable study by Kim SJ et al. (2017)</li>
        <li>Supports early detection and diagnosis</li>
      </ul>
      <h2>References</h2>
      <p>Kim SJ et al. (2017), "Development of Machine Learning Models for Diagnosis of Glaucoma."</p>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
}

export default About;
