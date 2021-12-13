import { useState } from "react";
import axios from "axios";

export default function Home({ data }) {
  const [year, setYear] = useState();
  const [holidays, setHolidays] = useState(data);

  /**
   *
   *
   * Fetch US public holidays for a particular year
   */
  const fetchHolidays = async () => {
    try {
      const res = await axios.get(`/api/holiday`, {
        params: { year },
      });

      setHolidays(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Public <span className="text-active">Holiday</span> App
      </h2>
      <h3 className="text-primary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Take a look at different public holidays of USA
      </h3>
      <div className="flex w-full justify-center md:flex-col md:w-5/6">
        <select
          name="countries"
          autoFocus={true}
          className="outline-none w-2/5 bg-secondary px-4 py-2 rounded-sm font-raleway md:w-full"
          onChange={(e) => setYear(e.target.value)}
        >
          {[2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map(
            (year) => {
              return <option value={year}>{year}</option>;
            }
          )}
        </select>
        <button
          className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-light hover:text-black md:ml-0 md:mt-4"
          onClick={fetchHolidays}
        >
          Search
        </button>
      </div>
      <div className="flex justify-around flex-wrap text-primary font-raleway mt-12 w-4/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
        {holidays.map((holiday) => (
          <div
            className="flex items-center flex-col bg-light w-56 h-40 rounded-md mb-12"
            key={holidays.indexOf(holiday)}
          >
            <div className="bg-primary text-background w-full h-24 flex justify-center items-center rounded-md">
              <p>{holiday.localName}</p>
            </div>
            <div className="flex justify-center items-center h-16">
              <p>{holiday.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-10 justify-center">
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
  const res = await axios.get("http://localhost:3000/api/holiday");
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
