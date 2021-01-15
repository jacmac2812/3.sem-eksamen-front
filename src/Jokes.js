import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const Jokes = () => {
  const [jokesData, setJokesData] = useState("");

  useEffect(() => {
    facade.fetchJokesData().then((data) => setJokesData(data));
  }, []);

  return (
    <div>
      <h2>Jokes Data Received from server</h2>
      <h3>{jokesData.cJoke}</h3>
      <h3>{jokesData.cJokeID}</h3>
      <h3>{jokesData.dJoke}</h3>
      <h3>{jokesData.dJokeID}</h3>
    </div>
  );
};

export default Jokes;
