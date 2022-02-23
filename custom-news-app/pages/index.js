import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [query, setQuery] = useState("taylor swift");
  const [response, setResponse] = useState(null);
  const [btnText, setBtnText] = useState("Search");

  /**
   *
   *
   * Fetches news information from the API
   */
  const fetchNews = async (e) => {
    e.preventDefault();
    try {
      setBtnText("Searching...");
      const res = await axios.get(`/api/news`, {
        params: {
          query,
        },
      });
      setResponse(res.data.value);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Custom <span className="text-active">News</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Get the latest news from around the world for a given query
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            autoFocus={true}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-none outline-none focus:ring-2 focus:ring-active w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Search for anything..."
          />
          <button
            className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
            onClick={fetchNews}
          >
            {btnText}
          </button>
        </form>
        {response && (
          <div className="flex flex-wrap justify-center mt-4 font-light text-primary font-raleway w-5/6 rounded-sm cursor-pointer md:w-80 md:h-40">
            {response.map((res) => {
              return (
                <div
                  className="w-2/6 h-72 border-2 border-active mx-6 my-16"
                  key={res.id}
                >
                  <a className="inline-block w-full h-full" href={res.url}>
                    <img
                      src={res.image.url}
                      alt={res.title}
                      className="w-full h-full"
                    />

                    <div className="flex justify-center w-full mt-4">
                      <h3 className="w-5/6 text-center">{res.title}</h3>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col mt-10 justify-center">
        <p className="block mt-10 mb-10 text-center text-secondary text-xs">
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
