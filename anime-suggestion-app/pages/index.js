import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [anime, setAnime] = useState("Death Note");
  const [response, setResponse] = useState(null);
  const [btnText, setBtnText] = useState("Get Suggestions");

  /**
   *
   *
   * Fetch Anime Recommendations
   */
  const fetchAnimeSuggestions = async (e) => {
    e.preventDefault();
    try {
      setBtnText("Getting Suggestions...");
      const res = await axios.get(`/api/suggestion`, {
        params: {
          anime,
        },
      });

      if (res.data.data !== "Anime Not Found") {
        setResponse(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
    setBtnText("Get Suggestions");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Anime <span className="text-secondary">Suggestion</span> App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Get anime suggestion based on your favorite anime
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            type="text"
            value={anime}
            autoFocus={true}
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter anime name..."
            onChange={(e) => setAnime(e.target.value)}
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
            onClick={fetchAnimeSuggestions}
          >
            {btnText}
          </button>
        </form>
        {response &&
          response.map((suggestion) => {
            const html = /<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi;
            const doubleSpace = /\s{2,}/g;

            const description = suggestion.description
              .replace(html, "")
              .replace(doubleSpace, " ")
              .trim();

            return (
              <div
                className="flex flex-col item-center my-12 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12"
                key={suggestion.id}
              >
                <div className="w-full mt-4 p-8 border border-secondary h-full text-lightGrey font-raleway">
                  <Image
                    src={suggestion.bannerImage}
                    width={800}
                    height={200}
                  />
                  <h2 className="text-xl font-bold my-4">
                    {suggestion.title.english}
                  </h2>
                  <p className="text-sm leading-8">{description}</p>
                  {suggestion.trailer && (
                    <div className="mt-4">
                      <h3 className="text-lg my-4 font-bold">Watch Trailer</h3>
                      <iframe
                        className="w-full h-96"
                        src={`https://www.youtube.com/embed/${suggestion.trailer.id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-secondary text-xs">
          Made by RapidAPI DevRel Team —{" "}
          <a
            className="hover:text-primary"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
