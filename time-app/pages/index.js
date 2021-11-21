import { useState, useEffect } from "react";
import Timezone from "../components/Timezone";
import axios from "axios";

export default function Home({ value }) {
  const [res, setRes] = useState(value);
  const [utcTime, setUtcTime] = useState(null);
  const [utcDate, setUtcDate] = useState(null);
  const [timezone, setTimezone] = useState("Africa/Abidjan");

  useEffect(() => {
    splitDataTime();
  }, []);

  /**
   *
   *
   * Split data and time.
   */
  const splitDataTime = () => {
    const date = value.utc_datetime.slice(0, 10);
    const time = value.utc_datetime.slice(11, 16);

    setUtcDate(date);
    setUtcTime(time);
  };

  /**
   *
   *
   * fetch time information
   */
  const fetchTimeInfo = async () => {
    try {
      const res = await axios.get(`/api/time`, {
        params: { timezone },
      });

      splitDataTime();
      setRes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-danger">Time</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Get Time-related information according to an area
      </h3>
      <div className="flex w-full justify-center md:flex-col md:w-5/6 ">
        <Timezone onChange={setTimezone} />
        <button
          className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
          onClick={fetchTimeInfo}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
        <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
          <thead className="font-raleway uppercase tracking-wide">
            <tr>
              <th className="border text-left px-4 py-4">
                <span className="text-danger">Information</span>
              </th>
              <th className="border text-left px-4 py-4">
                <span className="text-danger">Value</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-4">Timezone</td>
              <td className="border px-4 py-4">{res.timezone}</td>
            </tr>
            <tr>
              <td className="border px-4 py-4">UTC Time</td>
              <td className="border px-4 py-4">{utcTime}</td>
            </tr>
            <tr>
              <td className="border px-4 py-4">UTC Date</td>
              <td className="border px-4 py-4">{utcDate}</td>
            </tr>
            <tr>
              <td className="border px-4 py-4">UTC Offset</td>
              <td className="border px-4 py-4">{res.utc_offset}</td>
            </tr>
            <tr>
              <td className="border px-4 py-4">Client IP</td>
              <td className="border px-4 py-4">{res.client_ip}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
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

export async function getServerSideProps() {
  const res = await axios.get(
    "https://rapidapi-example-time-app.vercel.app/api/time"
  );
  const { data: value } = res;

  if (!value) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      value,
    },
  };
}
