import Head from "next/head";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [term, setTerm] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/search/", {
        params: { term },
      });
      const { data } = res;
      setResponse(data.tracks.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <Head>
        <title>RapidAPI Devrel Example - Music App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1 className="text-6xl text-primary font-bold mt-20">
        Music <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Discover music using the Shazam API from RapidAPI Hub.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for a song or an artist"
          onChange={(e) => setTerm(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>

      {response && (
        <div className="mt-16">
          <h3 className="text-secondary text-2xl">Search Results</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {response.map((song) => (
              <div key={song.track.title} className="pt-6">
                <div className="flow-root bg-light rounded-lg px-4 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className="p-3 rounded-md shadow-lg">
                        <img
                          src={song.track.images.coverart}
                          width={140}
                          height={140}
                          alt={song.track.title}
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center">
                      <h3 className="mt-2 text-lg text-center font-medium text-primary tracking-tight">
                        {song.track.title}
                      </h3>
                      <span className="mt-2 mb-4 max-w-xs text-sm text-secondary block">
                        {song.track.subtitle}
                      </span>
                      <a
                        className="mt-5 text-sm text-active"
                        href={song.track.url}
                      >
                        Open in Shazam
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      )}
    </div>
  );
}
