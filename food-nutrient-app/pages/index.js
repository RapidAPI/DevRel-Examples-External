import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [res, setRes] = useState(null);

  /**
   *
   *
   * Fetch nutrient information of a given food
   */
  const fetchNutrients = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/nutrient`, {
        params: {
          name,
        },
      });
      setRes(res.data.items[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Food <span className="text-secondary">Nutrient</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Shows Different Nutrient Quantity in A Food
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter the name of any food..."
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="outline-none border border-secondary text-bc font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={fetchNutrients}
          >
            Search
          </button>
        </form>
        {res && (
          <div className="flex flex-col text-primary text-sm text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide text-secondary">
                <tr>
                  <th className="border border-x-0 text-left px-4 py-4">
                    Nutrient
                  </th>
                  <th className="border border-x-0 text-left px-4 py-4">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody className="text-primary">
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Calories
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.calories}
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Carbohydrates
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.carbohydrates_total_g} g
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Cholesterol
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.cholesterol_mg} mg
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Fat Saturated
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.fat_saturated_g} g
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Total Fat
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.fat_total_g} g
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Fiber
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.fiber_g} g
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Potassium
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.potassium_mg} mg
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Protein
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.protein_g} g
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Serving Size
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.serving_size_g} g
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Sodium
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.sodium_mg} mg
                  </th>
                </tr>
                <tr>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    Sugar
                  </th>
                  <th className="border border-x-0 border-secondary text-left px-4 py-4">
                    {res.sugar_g} g
                  </th>
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
