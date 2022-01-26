import React from "react";
import spinner from "../Components/assets/spinner.gif";
const Spinner = () => {
  return (
    <div className="spinner">
    <h2>Loading...</h2>
      <img
        src={spinner}
        alt=" a picture of spinner"
       
      />
    </div>
  );
};

export default Spinner;
