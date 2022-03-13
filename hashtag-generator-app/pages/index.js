import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const getHashtags = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/generate/", {
        params: { keyword },
      });
      setResponse(res.data.data.hashtags);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-center text-active mt-10">
        Hashtag Generator
      </h1>
      <h2 className="text-primary text-center text-2xl font-light mt-6">
        Get the best hashtags for your content.
      </h2>
      <form
        className="sm:mx-auto mt-20 justify-center w-full sm:flex"
        onSubmit={(e) => {
          getHashtags();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="sm:w-1/3 w-full rounded-lg px-5 py-3 text-background font-bold text-lg focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter your keyword"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="w-full rounded-lg px-5 py-3 bg-active font-bold text-lg text-background hover:bg-primary sm:px-10"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Generate</>
            )}
          </button>
        </div>
      </form>
      {response && (
        <div className="mt-10">
          <p className="grid sm:grid-cols-4 grid-cols-1 sm:gap-4 gap-1 p-6 bg-primary rounded-lg">
            {response.map((item) => (
              <span key={item.relevance}>
                <span className="font-bold">#</span>
                {item.hashtag}
              </span>
            ))}
          </p>
        </div>
      )}
      <div className="mt-20 opacity-70 text-center">
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
  );
}
