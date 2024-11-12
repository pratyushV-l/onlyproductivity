"use client";

import React, { useState, useEffect } from 'react';
import './Timer.css'; // Import the CSS file

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <h2>Timer</h2>
      <p>{seconds} seconds</p>
    </div>
  );
};

export default Timer;