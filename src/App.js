import React, { useState } from "react";
import "./App.css";

function App() {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: "Sonny", born: "09/03/2001" },
    { id: 2, name: "Baby", born: "13/02/2021" },
    { id: 3, name: "Amisha", born: "27/03/2003" },
    { id: 4, name: "Grace", born: "13/02/2021" },
    { id: 5, name: "Sally", born: "13/02/2021" },
  ]);

  const clear = () => {
    setBirthdays([]);
  };

  return (
    <div className="app">
      <div className="head">
        <h1 className="head__title">Today's birthdays!</h1>
      </div>
      <div className="">
        {birthdays.map((birthday) => {
          if (birthday.born === new Date().toLocaleDateString()) {
            return (
              <p className="reminders__container" key={birthday.id}>
                {birthday.name} 💜
              </p>
            );
          } else {
            return "";
          }
        })}
      </div>
      <button onClick={clear}>Clear All</button>
    </div>
  );
}

export default App;
