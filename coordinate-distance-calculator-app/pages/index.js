import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [firstCoordinateSet, setFirstCoordinateSet] = useState("");
  const [secondCoordinateSet, setSecondCoordinateSet] = useState("");
  const [res, setRes] = useState("");
  const [btnText, setBtnText] = useState("Calculate");

  /**
   *
   *
   *
   */
  const fetchCoordinatesDistance = async (e) => {
    e.preventDefault();

    try {
      setBtnText("Calculating...");
      const res = await axios.get(`/api/calculator`, {
        params: {
          firstCoordinateSet,
          secondCoordinateSet,
        },
      });
      console.log(res.data);
      setRes(res.data);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Calculate");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Coordinate <span className="text-secondary">Distance</span> Calculator
        App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Calculate the distance between two coordinates
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form
          className="flex w-full justify-center md:flex-col md:w-5/6"
          onSubmit={(e) => checkValidity(e)}
        >
          <input
            autoFocus={true}
            className="border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter first coordinate set..."
            onChange={(e) => setFirstCoordinateSet(e.target.value)}
          />
          <input
            className="border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter second coordinate set..."
            onChange={(e) => setSecondCoordinateSet(e.target.value)}
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
            onClick={fetchCoordinatesDistance}
          >
            {btnText}
          </button>
        </form>
        {res && (
          <div className="flex flex-col mt-16 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
            <p className="mb-12 border border-secondary text-primary font-raleway px-4 py-8 tracking-wide leading-8">
              The total distance between these two coordinates is {res.distance}{" "}
              Miles
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-secondary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-primary"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
