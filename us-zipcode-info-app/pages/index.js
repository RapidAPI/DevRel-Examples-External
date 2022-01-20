import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [code, setCode] = useState("");
  const [info, setInfo] = useState(null);
  const [btnText, setBtnText] = useState("Search");

  /**
   *
   *
   * Fetch area information using zipcode
   */
  const fetchInfo = async (e) => {
    e.preventDefault();
    try {
      setBtnText("Loading...");
      const res = await axios.get(`/api/info`, {
        params: {
          code,
        },
      });

      setInfo(res.data[0]);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        US <span className="text-secondary">Zipcode</span> Info App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Checkout different information associated with a zipcode
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            autoFocus={true}
            type="number"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
            placeholder="Enter the zipcode..."
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={fetchInfo}
          >
            {btnText}
          </button>
        </form>
      </div>
      {info && (
        <div className="flex flex-col text-primary text-sm text-raleway mt-12 w-4/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
          <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
            <tbody className="text-primary">
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Area code
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.AreaCode}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.City}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City Alias Mixed Case
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CityAliasMixedCase}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City Alias Name
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CityAliasName}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City Delivery Indicator
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CityDeliveryIndicator}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City Mixed Case
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CityMixedCase}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City State Key
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CityStateKey}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  City Type
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CityType}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  County
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.County}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  County ANSI
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CountyANSI}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  County FIPS
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CountyFIPS}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  County Mixed Case
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CountyMixedCase}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Day Light Saving
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.DayLightSaving}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Elevation
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.Elevation}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Facility Code
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.FacilityCode}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Finance Number
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.FinanceNumber}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Latitude
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.Latitude}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Longitude
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.Longitude}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Preferred Last Line Key
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.PreferredLastLineKey}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  State
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.State}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Time Zone
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.TimeZone}
                </th>
              </tr>
              <tr>
                <th className="border border-x-0 border-secondary text-left px-4 py-4 uppercase">
                  Carrier Route Rate Sortation
                </th>
                <th className="border border-x-0 border-secondary text-left px-4 py-4">
                  {info.CarrierRouteRateSortation}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )}

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
