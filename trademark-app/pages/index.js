import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState(null);
  const [response, setResponse] = useState(null);

  const getTrademark = async () => {
    try {
      const res = await axios.get("api/search/", {
        params: { keyword },
      });
      const { data } = res;
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-active font-bold font-active mt-20">
        Trademark Search
      </h1>
      <h2 className="text-primary text-2xl mt-6">
        Search Trademarks and check availability of a keyword.
      </h2>

      <div className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter your keyword"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-sm px-5 py-3 bg-active text-base text-background font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getTrademark()}
          >
            Search
          </button>
        </div>
      </div>
      {response && (
        <div className="mt-10 max-w-3xl w-full">
          <h3 className="text-primary text-center text-xl">
            The trademark keyword {keyword} is{" "}
            {response.count === 0 && (
              <span className="text-active">available</span>
            )}
            {response.count !== 0 && (
              <span className="text-danger">not available</span>
            )}
          </h3>
          {response.count !== 0 && (
            <div>
              <h3 className="text-primary mt-10 text-base">
                Trademark Details:
              </h3>
              <table className="w-full text-primary font-semibold mt-2 md:text-sm">
                <tbody className="bg-primary rounded-sm divide-y text-background overflow-x-scroll">
                  <tr>
                    <td className="px-4 py-4">Keyword</td>
                    <td className="border-l px-4 py-4">
                      {response.items[0].keyword}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Status</td>
                    <td className="border-l px-4 py-4 capitalize">
                      {response.items[0].status_label}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Registration No.</td>
                    <td className="border-l px-4 py-4">
                      {response.items[0].registration_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Expiration Date</td>
                    <td className="border-l px-4 py-4">
                      {response.items[0].expiration_date}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Owner</td>
                    <td className="border-l px-4 py-4">
                      {response.items[0].owners[0].name}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-10 text-center">
                <p className="text-primary text-xs">
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
      )}
    </div>
  );
}
