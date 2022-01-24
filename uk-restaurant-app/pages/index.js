import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [area, setArea] = useState("");
  const [res, setRes] = useState(null);
  const [btnText, setBtnText] = useState("Search");

  /**
   *
   *
   * Fetch restaurants of a district
   */
  const fetchRestaurants = async (e) => {
    e.preventDefault();
    try {
      setBtnText("Loading...");
      const res = await axios.get(`/api/restaurant`, {
        params: {
          area,
        },
      });
      setRes(res.data);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        UK <span className="text-danger">Restaurant</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Search for Restaurants in a UK district
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="UK district..."
            onChange={(e) => setArea(e.target.value)}
          />
          <button
            className="outline-none border border-secondary text-bc font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={fetchRestaurants}
          >
            {btnText}
          </button>
        </form>
        {res && (
          <div className="flex flex-col text-primary text-sm text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            {res.map((restaurant) => {
              return (
                <div key={res.indexOf(restaurant)}>
                  <h3 className="font-raleway font-semibold text-danger text-2xl text-primary pb-6 md:text-xl">
                    {restaurant.BusinessName}
                  </h3>
                  <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
                    <tbody className="text-secondary font-normal">
                      <tr>
                        <th className="border border-secondary text-left px-4 py-4 font-normal">
                          Address
                        </th>
                        <th className="border border-secondary text-left px-4 py-4 font-normal">
                          {restaurant.AddressLine1} {restaurant.AddressLine2}{" "}
                          {restaurant.AddressLine3}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-secondary text-left px-4 py-4 font-normal">
                          Business Type
                        </th>
                        <th className="border border-secondary text-left px-4 py-4 font-normal">
                          {restaurant.BusinessType}
                        </th>
                      </tr>
                      {restaurant.Scores_Hygiene !== undefined && (
                        <tr>
                          <th className="border border-secondary text-left px-4 py-4 font-normal">
                            Hygiene Score
                          </th>
                          <th className="border border-secondary text-left px-4 py-4 font-normal">
                            {restaurant.Scores_Hygiene}
                          </th>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              );
            })}
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
