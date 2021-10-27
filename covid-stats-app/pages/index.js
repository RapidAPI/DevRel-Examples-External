import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState(null);
  const [stats, setStats] = useState(null);

  /**
   *
   *
   * Fetches COVID-19 Stats of a country
   */
  const fetchStats = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/stats`, {
        params: { country },
      });
      const { data } = res;
      setStats(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        COVID-19 <span className="text-danger">Stats</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Track COVID-19 Spread Across the World
      </h3>
      <div className="flex flex-col justify-between w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Search for any country stats..."
            onChange={(e) => setCountry(e.target.value)}
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
            onClick={fetchStats}
          >
            Search
          </button>
        </div>
        {stats && (
          <div className="flex justify-center mt-12 h-4/5 md:w-full overflow-scroll">
            <table className="text-primary border-danger border w-3/5 md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide">
                <tr>
                  <th className="border-danger border text-left px-4 py-4">
                    Country
                  </th>
                  <th className="border-danger border text-left px-4 py-4">
                    Confirmed
                  </th>
                  <th className="border-danger border text-left px-4 py-4">
                    Recovered
                  </th>
                  <th className="border-danger border text-left px-4 py-4">
                    Deaths
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-danger border px-4 py-4">
                    {stats.country}
                  </td>
                  <td className="border-danger border px-4 py-4">
                    {stats.confirmed}
                  </td>
                  <td className="border-danger border px-4 py-4">
                    {stats.recovered}
                  </td>
                  <td className="border-danger border px-4 py-4">
                    {stats.deaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 bottom-80 flex justify-center items-end h-52 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            See Examples Like this
          </a>
        </p>
      </div>
    </div>
  );
}
