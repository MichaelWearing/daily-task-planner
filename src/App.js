import React, { useState, useId, useEffect } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

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

  const [currentActivity, setCurrentActivity] = useState(null);

  const [mikeyArray, setMikeyArray] = useState([
    {
      ActivityTitle: "Work Day",
      subActivities: [
        {
          title: "Program",
          amount: 0,
          description: "",
          hasDuration: true,
          duration: {
            hours: 2,
            minutes: 0,
            seconds: 0,
          },
          remainingTime: {
            hours: 2,
            minutes: 0,
            seconds: 0,
          },
        },
      ],
    },
    {
      ActivityTitle: "Pull 1",
      subActivities: [
        {
          title: "Lat Pull Down 10x3",
          amount: 8,
          description: "Was able to do 5 reps at 9",
          hasDuration: true,
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
      ],
    },
    {
      ActivityTitle: "Push 1",
      subActivities: [
        {
          title: "Bench Press",
          amount: 20,
          description: "3 reps 22.5",
          hasDuration: true,
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
      ],
    },
  ]);

  console.log(mikeyArray, "mikey array");

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
        currentActivity={currentActivity}
        setCurrentActivity={setCurrentActivity}
        mikeyArray={mikeyArray}
        setMikeyArray={setMikeyArray}
        dailyActivities={dailyActivities}
        setDailyActivities={setDailyActivities}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default App;
