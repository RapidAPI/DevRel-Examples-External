import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [word, setWord] = useState("");
  const [res, setRes] = useState([]);
  const [btnText, setBtnText] = useState("Search");

  /**
   *
   *
   * Fetch word usage using the API
   */
  const fetchUsage = async (e) => {
    e.preventDefault();

    try {
      setBtnText("Loading...");
      const res = await axios.get(`/api/usage`, {
        params: {
          word,
        },
      });

      setRes(res.data.examples);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Word <span className="text-secondary">Usage</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Shows How A Word Is Used In a Sentence
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter a word..."
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            className="outline-none border border-secondary text-bc font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={fetchUsage}
          >
            {btnText}
          </button>
        </form>
        {res && (
          <div className="flex flex-col mt-12 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
            {res.map((use) => (
              <p
                className="mb-12 border border-secondary text-primary font-raleway px-4 py-8 tracking-wide leading-8"
                key={res.indexOf(use)}
              >
                {use}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-secondary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-active"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
