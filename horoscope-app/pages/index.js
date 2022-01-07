import { useState } from "react";
import axios from "axios";

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

export default function Home({ data }) {
  const [res, setRes] = useState(data);
  const [selectedSign, setSelectedSign] = useState("");

  /**
   *
   *
   * Fetch horoscope
   */
  const fetchHoroscope = async () => {
    try {
      const res = await axios.post("/api/horoscope", { sign: selectedSign });
      setRes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
        <button
          className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
          onClick={fetchHoroscope}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col mt-16 w-3/6 h-4/5 md:flex-col md:w-5/6 md:h-full md:mb-12 md:items-center">
        <p className="border border-secondary border-b-0 text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
          {res.description}
        </p>
        <table className="w-full text-secondary mb-8 md:text-sm md:mx-2">
          <tbody>
            <tr>
              <td className="border border-secondary px-4 py-4 text-active">
                Color
              </td>
              <td className="border px-4 py-4">{res.color}</td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4 text-active">
                Compatibility
              </td>
              <td className="border px-4 py-4">{res.compatibility}</td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4 text-active">
                Date Range
              </td>
              <td className="border px-4 py-4">{res.date_range}</td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4 text-active">
                Lucky Number
              </td>
              <td className="border px-4 py-4">{res.lucky_number}</td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4 text-active">
                Mood
              </td>
              <td className="border px-4 py-4">{res.mood}</td>
            </tr>
          </tbody>
        </table>
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

export async function getServerSideProps() {
  const res = await axios.post("http://localhost:3000/api/horoscope");
  const { data } = res;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
