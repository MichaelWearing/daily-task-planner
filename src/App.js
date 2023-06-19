import React, { useState, useId, useEffect } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

//
//
// Reset button for each activity ??
//
// Edit Button
//
// Add Mobile media queries
//
// ----- Maybe -----
//
// Have a congratz screen for completeing a day
//
// Make activities dragable to re-order
//
// ----- Bugs -----
//
// Id's are not unquie enough. Every refresh causes the id to go back to the same first ID
//
// When you refresh, the timers go back to full duration
//
// If a user inputs 00 into one of the time slots, it will display triple 0's

const App = () => {
  const id = useId();

  const [showModal, setShowModal] = useState(false);

  const initialDataFromLocalStorage = JSON.parse(
    localStorage.getItem("dailyActivitiesLocalStorage")
  );

  const initialData = initialDataFromLocalStorage
    ? initialDataFromLocalStorage
    : [
        {
          id: id,
          title: "My First Activity",
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
      ];

  const [dailyActivities, setDailyActivities] = useState(initialData);

  useEffect(() => {
    localStorage.setItem(
      "dailyActivitiesLocalStorage",
      JSON.stringify(dailyActivities)
    );
  }, [dailyActivities]);

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
