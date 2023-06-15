import React, { useState, useId } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

// Save stuff via cookies
//
// Maybe have a congratz screen for completeing a day
//
// Reset button for each activity ??
//
// Delete Button
//
// Edit Button
//
// User Input, need to add all boxes and correctly

const App = () => {
  const id = useId();
  const id2 = useId();

  const [showModal, setShowModal] = useState(false);

  const [dailyActivities, setDailyActivities] = useState([
    {
      id: id,
      title: "Code Test",
      duration: {
        hours: 0,
        minutes: 0,
        seconds: 5,
      },
      remainingTime: {
        hours: 0,
        minutes: 0,
        seconds: 5,
      },
    },
    {
      id: id2,
      title: "Code Test 2",
      duration: {
        hours: 0,
        minutes: 1,
        seconds: 5,
      },
      remainingTime: {
        hours: 0,
        minutes: 1,
        seconds: 5,
      },
    },
  ]);

  // console.log(dailyActivities, "App.js - dailyActivities");
  console.log(dailyActivities[0].remainingTime, "App.js - dailyActivities");

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
