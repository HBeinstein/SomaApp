import React, { useState } from "react";
import Meditation from './Meditation';
import MeditationEnd from './MeditationEnd';

function MeditationControl() {
  const [view, setView] = useState('meditation');

  if(view === "meditation"){
    return(
      <Meditation />
    );
  } else {
    return(
      <MeditationEnd />
    );
  }
}

export default MeditationControl;