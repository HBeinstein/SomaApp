import React, { useState } from "react";
import Meditation from './Meditation';
import MeditationEnd from './MeditationEnd';
import MeditationSelection from './MeditationSelection';

function MeditationControl() {
  const [view, setView] = useState('meditation');

  if(view === "meditation"){
    return(
      <Meditation />
    );
  } else if(view === "meditationEnd") {
    return(
      <MeditationEnd />
    );
  } else {
    return(
      <React.Fragment>
        <MeditationSelection/>
      </React.Fragment>
    );
  }
}

export default MeditationControl;