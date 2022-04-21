import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [planet, setPlanet] = useState("Earth");
  const [response, setResponse] = useState(null);
  const [btnText, setBtnText] = useState("Search");

  /**
   *
   *
   * Get info of the planet
   */
  const fetchPlanetInfo = async (e) => {
    e.preventDefault();
    setBtnText("Loading...");
    try {
      const res = await axios.get(`/api/info/`, {
        params: { planet },
      });
      setResponse(res.data[0]);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-active">Planet</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Get Stats on your favorite planets
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="text"
            className="border-none font-semibold outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Planet name..."
            value={planet}
            onChange={(e) => setPlanet(e.target.value)}
          />
          <button
            className="outline- outline-active border border-active font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={fetchPlanetInfo}
          >
            {btnText}
          </button>
        </form>
        {response && (
          <div className="flex flex-col text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            <table className="w-full text-secondary mb-8 md:text-sm md:mx-2">
              <tbody>
                <tr>
                  <td className="border px-4 py-4">Distance Light Year</td>
                  <td className="border px-4 py-4 capitalize">
                    {response.distance_light_year}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Host Star Mass</td>
                  <td className="border px-4 py-4 capitalize">
                    {response.host_star_mass}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Host Star Temperature</td>
                  <td className="border px-4 py-4">
                    {response.host_star_temperature}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Mass</td>
                  <td className="border px-4 py-4">{response.mass}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Period</td>
                  <td className="border px-4 py-4">{response.period}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Radius</td>
                  <td className="border px-4 py-4">{response.radius}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Semi Major Axis</td>
                  <td className="border px-4 py-4">
                    {response.semi_major_axis}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Temperature</td>
                  <td className="border px-4 py-4">{response.temperature}</td>
                </tr>
              </tbody>
            </table>
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
