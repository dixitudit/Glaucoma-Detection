import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Glaucoma Diagnosis Tool</h1>
      
      <div className='full'>
        <img src="/images/galucoma.jpeg" alt="Glaucoma" className="home-image" />
        <div className='details'>
            <p>Use this tool to get a preliminary diagnosis of glaucoma based on medical data.</p>
            <ul>
                <li>Easy to use</li>
                <li>Accurate predictions</li>
                <li>Fast and reliable</li>
            </ul>
            <p>
                Learn more about glaucoma diagnosis and the technology behind this tool in the 
                <a href="/about"> About </a> section.
            </p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
