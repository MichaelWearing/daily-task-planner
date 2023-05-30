import React, { useState } from "react";

import Board from "./components/Board/Board";
import ActivityCreation from "./components/ActivityCreation/ActivityCreation";

// Make a board to hold cards
// Make a card which has a title and a timer
// Cards have a duration, and a timer that counts down
// Save stuff via cookies

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const dailyActivities = [ 
    // Maybe make into state and hold timer
    {
      title: "Code",
      duration: 5,
    },
  ];

  // UseRef to get inputs// UseRef to get inputs// UseRef to get inputs
  // UseRef to get inputs// UseRef to get inputs// UseRef to get inputs
  // UseRef to get inputs// UseRef to get inputs// UseRef to get inputs
  // UseRef to get inputs// UseRef to get inputs// UseRef to get inputs
  // UseRef to get inputs// UseRef to get inputs// UseRef to get inputs
  // 
  // To add new activities

  return (
    <>
      {showModal && <ActivityCreation setShowModal={setShowModal} />}
      <Board
        dailyActivities={dailyActivities}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default App;
