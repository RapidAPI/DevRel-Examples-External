import { useState, useEffect } from "react";
import axios from "axios";

export default function Home({ value }) {
  const [utcTime, setUtcTime] = useState(null);
  const [utcDate, setUtcDate] = useState(null);

  useEffect(() => {
    const date = value.utc_datetime.slice(0, 10);
    const time = value.utc_datetime.slice(11, 16);

    setUtcDate(date);
    setUtcTime(time);
  }, [utcTime, utcDate]);

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-danger">Time</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-4 md:text-base md:px-4 md:text-center">
        Get Time-related information according to your area
      </h3>
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
              <td className="border px-4 py-4">{value.timezone}</td>
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
              <td className="border px-4 py-4">{value.utc_offset}</td>
            </tr>
            <tr>
              <td className="border px-4 py-4">Client IP</td>
              <td className="border px-4 py-4">{value.client_ip}</td>
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
  const res = await axios.get("http://localhost:3000/api/time");
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
