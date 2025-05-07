import React from "react";
import Card from "./Card";

function price() {
  return (
    <div className="w-auto bg-black  text-white">
      <div className="flex justify-center">
        <h3 className="text-center text-3xl ">
          Start today, with free or premium <br /> plan, you choose
        </h3>
      </div>
      <div className="flex flex-col md:flex-row   gap-4 justify-center">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default price;
