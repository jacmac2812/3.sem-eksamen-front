import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const Swabi = () => {
  const [swabiData, setSwabiData] = useState("");

  useEffect(() => {
    facade.fetchSwabiData().then((data) => setSwabiData(data));
  }, []);

  return (
    <div>
      <h2>Swabi Data Received from server</h2>
      <h3>{swabiData.SpaceShipName}</h3>
      <h3>{swabiData.SpaceShipModel}</h3>
      <h3>{swabiData.PersonName}</h3>
      <h3>{swabiData.PersonGender}</h3>
      <h3>{swabiData.planetName}</h3>
      <h3>{swabiData.planetPopulation}</h3>
    </div>
  );
};

export default Swabi;
