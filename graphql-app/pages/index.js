import Head from "next/head";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [countryName, setCountryName] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/countries/", {
        params: { countryName },
      });
      const { data } = res;
      setResponse(data.data.countries.edges);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <h1 className="text-6xl text-primary font-bold mt-10">
        Example GraphQl <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information about a given country using a
        GraphQl API.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for any country using full name or first few letters"
          onChange={(e) => setCountryName(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>

      {response && (
        <div className="mt-16">
          <h3 className="text-secondary text-ceter text-2xl">Search Results</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {response.map((item) => (
              <div key={item.node.name} className="mt-6 pt-6 grid">
                <div className="bg-secondary rounded-lg px-4 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className=" rounded-md shadow-lg">
                        <img
                          src={item.node.flagImageUri}
                          width={140}
                          height={140}
                          alt="flag"
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center text-background">
                      <h3 className="mt-2 text-2xl text-center font-bold tracking-tight">
                        {item.node.name}
                      </h3>
                      <span className="ml-2 mt-2 mb-4 text-base font-bold block">
                        {item.node.capital}
                      </span>
                      Currency:
                      <span className="ml-2 font-bold text-base">
                        {item.node.currencyCodes[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-40 mb-10 text-center">
            <p className="text-secondary text-xs">
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
      )}
    </div>
  );
}
