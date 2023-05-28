import React from "react";

import Board from "./components/Board/Board";

// Make a board to hold cards
// Make a card which has a title and a timer
// Cards have a duration, and a timer that counts down
// Save stuff via cookies

const App = () => {
  const dailyActivities = [
    // Maybe make into state and hold timer
    {
      title: "Code",
      duration: 5,
    },
  ];

  return (
    <>
      <Board dailyActivities={dailyActivities} />
    </>
  );
};

export default App;
