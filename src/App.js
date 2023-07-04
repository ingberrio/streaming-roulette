import React, { useState } from 'react';
import './App.css';

/**
 * Renders the Streaming Roulette component.
 *
 * @return {JSX.Element} The rendered component.
 */
function StreamingRoulette() {
  const streamingServices = ['Netflix', 'Hulu', 'HBO', 'Prime Video','Disney +'];
  const streamingCategory = ['Movie', 'TV', 'Series', 'Korean', 'Documentary'];
  const streamingGender = ['Action', 'Romance', 'Comedy', 'Drama' ];
  const streamingPosition = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'];

  const [selectedService, setSelectedService] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [selectedPosition, setSelectedPosition] = useState();

  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

/**
 * Handle the "Get Started" action.
 *
 * @param {void} - No parameters.
 * @return {void} - No return value.
 */
  const handleGetStarted = () => {
    setSelectedService(streamingServices[getRandomIndex(streamingServices)]);
    setSelectedCategory(streamingCategory[getRandomIndex(streamingCategory)]);
    setSelectedGender(streamingGender[getRandomIndex(streamingGender)]);
    setSelectedPosition(streamingPosition[getRandomIndex(streamingPosition)]);
    playSound();
  };

  /**
   * Plays a sound.
   *
   * @param {none} None - No parameters.
   * @return {none} None - No return value.
   */
  const playSound = () => {
    const audio = new Audio('pew_pew.mp3');
    audio.play();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row"><h1>Streaming Roulette</h1></div>
        <br></ br>
        <div className="row h-10">
          <div className="button col">{selectedService || 'Platform'}</div>
          <div className="button col">{selectedCategory || 'Category'}</div>
          <div className="button col">{selectedGender || 'Gender'}</div>
          <div className="button col">{selectedPosition || 'Position'}</div>
        </div>
        <br></ br>
        <div className="row">
          <div className='btn-main h-100 d-flex align-items-center justify-content-center'>
            <button
              className="btn-yellow"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreamingRoulette;
