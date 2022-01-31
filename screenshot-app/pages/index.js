import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const getScreenshot = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/screenshot/", {
        params: { url },
      });
      const { data } = res;
      setLoading(false);
      setResponse(data.screenshotUrl);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-primary font-bold mt-12">
        Screenshot <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Get screenshot of any given URL.
      </h2>
      <form
        className="sm:mx-auto mt-12 md:max-w-4xl justify-center flex flex-col sm:w-full sm:flex"
        onSubmit={(e) => {
          getScreenshot();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter a url eg: https://RapidAPI.com"
          onChange={(e) => {
            setUrl(e.target.value);
            setResponse(null);
          }}
        />

        <button
          className="mt-5 w-full rounded-lg px-5 py-3 bg-active text-base text-background font-bold hover:text-active hover:bg-primary transition-colors duration-300 sm:px-10"
          type="submit"
        >
          {loading ? <>Loading..</> : <>Submit</>}
        </button>
      </form>

      {error && (
        <span className="text-active text-xl mt-6">
          Error: Failed to get the screenshot. Please try again.
        </span>
      )}

      {response && (
        <div className="mt-10 ">
          <h2 className="text-xl font-bold text-active">Screenshot</h2>
          <img src={response} className="mt-3 w-full h-full rounded-lg" />
        </div>
      )}

      <div className="mt-20 mb-10 text-center">
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
