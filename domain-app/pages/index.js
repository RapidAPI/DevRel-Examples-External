import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState(null);
  const [response, setResponse] = useState(null);
  const [errorInfo, setErrorInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDomainInfo = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/search/", {
        params: { keyword },
      });
      const { data } = res;
      setLoading(false);
      setResponse(data);
    } catch (error) {
      setLoading(false);
      setErrorInfo(error.response.data);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-open-sans items-center min-h-screen">
      <h1 className="text-6xl text-active font-bold font-active mt-10">
        Domain Search
      </h1>
      <h2 className="text-primary text-2xl mt-6">
        Check availability and information of any domain.
      </h2>

      <form
        className="sm:mx-auto mt-20 justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getDomainInfo();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="block w-1/3 rounded-sm px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter your keyword"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null);
            setErrorInfo(null);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-sm px-5 py-3 bg-active text-base text-primary font-bold focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            type="submit"
          >
            {loading ? <>Loading..</> : <>Search</>}
          </button>
        </div>
      </form>
      {errorInfo && (
        <div className="mt-10 max-w-3xl w-full">
          <h3 className="text-danger text-center text-xl">
            Error: {errorInfo}
          </h3>
        </div>
      )}
      {response && (
        <div className="mt-10 max-w-3xl w-full">
          <h3 className="text-primary text-center text-xl">
            The domain {keyword} is{" "}
            {response.availability === "available" ? (
              <span className="text-active">available</span>
            ) : (
              <span className="text-danger">not available</span>
            )}
          </h3>
          {response.availability !== "available" && (
            <div>
              <h3 className="mt-10 text-primary text-xl">Details:</h3>
              <table className="w-full text-primary font-semibold mt-2 md:text-sm">
                <tbody className="bg-primary rounded-sm divide-y text-background overflow-x-scroll">
                  <tr>
                    <td className="px-4 py-4">Domain</td>
                    <td className="border-l px-4 py-4">
                      {response.payload.full}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Status</td>
                    <td className="border-l px-4 py-4 capitalize">
                      {response.payload.availability}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Registrant</td>
                    <td className="border-l px-4 py-4">
                      {response.payload.registrar_name}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Created On</td>
                    <td className="border-l px-4 py-4">
                      {new Date(
                        response.payload.creation_date // Convert to dd/mm/yyyy format
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Expires After</td>
                    <td className="border-l px-4 py-4">
                      {response.payload.time_to_expire}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">Updated</td>
                    <td className="border-l px-4 py-4">
                      {response.payload.time_since_last_update} ago
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-10 text-center">
                <p className="text-primary text-xs font-light">
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
