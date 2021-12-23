import { useState } from "react";

export default function Home() {
  const [selectedSign, setSelectedSign] = useState("");
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-active">Horoscope</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Lookup Your Daily Horoscope Quickly
      </h3>
      <div className="flex w-full justify-center md:flex-col md:w-5/6">
        <select
          name="countries"
          autoFocus={true}
          className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
          onChange={(e) => setSelectedSign(e.target.value)}
        >
          {signs.map((sign) => (
            <option value={sign} key={signs.indexOf(sign)}>
              {sign}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
        <p className="my-12 border border-secondary text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
          ""
        </p>
      </div>
      <div className="flex flex-col mt-10 justify-end h-36">
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
