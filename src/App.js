import React, { useState } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

// Make a board to hold cards
// Make a card which has a title and a timer
// Cards have a duration, and a timer that counts down
// Save stuff via cookies

const App = () => {
  const [showModal, setShowModal] = useState(false);

  // Maybe make into state and hold timer
  const [dailyActivities, setDailyActivities] = useState([
    {
      title: "Code Test",
      duration: 7,
    },
  ]);

  return (
    <>
      {showModal && (
        <ActivityCreation
          setShowModal={setShowModal}
          dailyActivities={dailyActivities}
          setDailyActivities={setDailyActivities}
        />
      )}
      <Board
        dailyActivities={dailyActivities}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default App;
