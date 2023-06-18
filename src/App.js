import React, { useState, useId, useEffect } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

//
// Maybe have a congratz screen for completeing a day
//
// Reset button for each activity ??
//
// Edit Button
//
// User Input, need to add all boxes and correctly
//

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
