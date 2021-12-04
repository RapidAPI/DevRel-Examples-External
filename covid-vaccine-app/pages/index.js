import { useState } from "react";
import axios from "axios";
import Dropdown from "../components/Dropdown";

export default function Home({ data }) {
  const [countryCode, setCountryCode] = useState("ABW");
  const [res, setRes] = useState(data[data.length - 1]);

  /**
   *
   *
   * Fetch vaccine information of a country
   */
  const fetchInfo = async () => {
    try {
      const res = await axios.get(`/api/vaccine`, {
        params: { countryCode },
      });

      const { data } = res;
      setRes(data[data.length - 1]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        COVID-19 <span className="text-primary">Vaccine</span> Stats App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Look up COVID-19 Vaccination Stats Across Different Countries
      </h3>
      <div className="flex justify-center items-center mb-8 w-5/6 md:items-center md:flex-col">
        <Dropdown onChange={setCountryCode} />
        <button
          className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4 md:w-5/6"
          onClick={fetchInfo}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col text-raleway mt-6 w-3/6 h-4/5 md:w-5/6 md:h-full md:mb-12">
        <table className="bg-white w-full text-secondary text-lg mb-8 md:text-sm md:mx-2">
          <thead className="font-raleway uppercase tracking-wide">
            <tr>
              <th className="border border-secondary text-primary text-lg font-bold text-left px-4 py-4">
                Information
              </th>
              <th className="border border-secondary text-primary text-lg font-bold text-left px-4 py-4">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-secondary px-4 py-4">Country</td>
              <td className="border border-secondary px-4 py-4">
                {res.country}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">Vaccines</td>
              <td className="border border-secondary px-4 py-4">
                {res.vaccines}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                Daily Vaccination Per Million
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.daily_vaccinations_per_million}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                People Fully Vaccinated
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.people_fully_vaccinated}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                People Fully Vaccinated Per Hundred
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.people_fully_vaccinated}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                People Vaccinated
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.people_vaccinated}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                People Vaccinated Per Hundred
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.people_vaccinated_per_hundred}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                Total Vaccination
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.total_vaccinations}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">
                Total Vaccination Per Hundred
              </td>
              <td className="border border-secondary px-4 py-4">
                {res.total_vaccinations_per_hundred}
              </td>
            </tr>
            <tr>
              <td className="border border-secondary px-4 py-4">Source</td>
              <td className="border border-secondary px-4 py-4 text-primary underline">
                <a href={res.source_website}>{res.source_name}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col mt-4 justify-center">
          <p className="block mb-8 text-center text-secondary text-xs">
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
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/vaccine");
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
