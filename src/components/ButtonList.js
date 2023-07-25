import React from "react";
import Button from "./Button";

const list = [
  "All",
  "England cricket team",
  "Mixes",
  "Computer Science",
  "News",
  "Cricket",
  "Bollywood",
  "Podcasts",
  "cars",
  "Recently uploaded",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btnelement) => (
        <Button name={btnelement} />
      ))}
    </div>
  );
};

export default ButtonList;
