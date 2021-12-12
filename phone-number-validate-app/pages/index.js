import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [number, setNumber] = useState("");
  const [res, setRes] = useState(null);

  /**
   *
   *
   * Check if phone number is valid or not
   */
  const fetchValidation = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/validate`, { number });
      const { data } = res;
      setRes(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-5xl text-primary pt-20 pb-6 md:text-3xl">
        Phone Number <span className="text-secondary">Validation</span> App
      </h2>
      <h3 className="text-active text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check if a Phone Number is valid or not
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form
          className="flex w-full justify-center md:flex-col md:w-5/6"
          onSubmit={(e) => fetchValidation(e)}
        >
          <input
            autoFocus={true}
            type="number"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm md:w-full"
            placeholder="Enter the phone number..."
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-background text-primary transition duration-300 hover:bg-active hover:text-background md:ml-0 md:mt-4"
            onClick={fetchValidation}
          >
            Validate
          </button>
        </form>
        {res && (
          <div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide">
                <tr>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Information</span>
                  </th>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Result</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-4">Valid</td>
                  <td className="border px-4 py-4 capitalize">
                    {JSON.stringify(res.valid)}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Country</td>
                  <td className="border px-4 py-4 capitalize">{res.country}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Country Code</td>
                  <td className="border px-4 py-4">{res["country-code3"]}</td>
                </tr>
                {res["prefix-network"] && (
                  <tr>
                    <td className="border px-4 py-4">Prefix Network</td>
                    <td className="border px-4 py-4">
                      {res["prefix-network"]}
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="border px-4 py-4">International Number</td>
                  <td className="border px-4 py-4">
                    {res["international-number"]}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Local Number</td>
                  <td className="border px-4 py-4">{res["local-number"]}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">
                    International Calling Code
                  </td>
                  <td className="border px-4 py-4">
                    {res["international-calling-code"]}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">Type</td>
                  <td className="border px-4 py-4">{res.type}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      {res && (
        <div className="flex flex-col mt-4 justify-center">
          <p className="block mb-10 text-center text-primary text-xs">
            Made by RapidAPI DevRel Team -{" "}
            <a
              className="hover:text-active"
              href="https://github.com/RapidAPI/DevRel-Examples-External"
            >
              See more examples like this
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
