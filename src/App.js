import React, { useState } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

// Save stuff via cookies

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const [dailyActivities, setDailyActivities] = useState([
    {
      title: "Code Test",
      duration: {
        hours: 0,
        minutes: 0,
        seconds: 5,
      },
    },
    {
      title: "Code Test 2",
      duration: {
        hours: 0,
        minutes: 1,
        seconds: 5,
      },
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
        setDailyActivities={setDailyActivities}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default App;
