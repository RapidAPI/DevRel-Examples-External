import { useState } from "react";
import axios from "axios";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Country <span className="text-danger">Info</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Take a quick look at some basic information about a country
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="number"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Pin code..."
          />
          <button className="outline-none border border-danger text-secondary font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4">
            Get Info
          </button>
        </form>
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-primary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-danger"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
