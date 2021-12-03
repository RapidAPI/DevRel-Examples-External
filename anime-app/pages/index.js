import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [anime, setAnime] = useState("");
  const [searchRes, setSearchRes] = useState(null);

  /**
   *
   *
   * Fetch anime details
   */
  const fetchAnimeDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/anime`, {
        params: { anime },
      });
      const { data } = res;
      const { results } = data;

      results = results.slice(0, 10);
      setSearchRes(results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-active">Anime</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Search and look for your favorite anime
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Search for your favorite anime..."
            onChange={(e) => setAnime(e.target.value)}
          />
          <button
            className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
            onClick={(e) => fetchAnimeDetails(e)}
          >
            Search
          </button>
        </form>
        {searchRes &&
          searchRes.map((animeDetail) => (
            <div className="flex flex-col items-center mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
              <div className="flex justify-center w-full">
                <Link href={animeDetail.url}>
                  <a>
                    <Image
                      src={animeDetail.image_url}
                      width={400}
                      height={600}
                      alt={animeDetail.title}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex flex-col justify-center mt-8 md:mt-6 w-3/6 md:w-full">
                <div className="flex justify-between w-full md:flex-col">
                  <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                    Title
                  </p>
                  <p className="text-secondary w-4/6 text-right md:text-left">
                    {animeDetail.title}{" "}
                  </p>
                </div>
                <div className="flex justify-between mt-4 w-full md:flex-col">
                  <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                    Popularity
                  </p>
                  <p className="text-secondary">{animeDetail.score} </p>
                </div>
                <div className="flex justify-between mt-4 w-full md:flex-col">
                  <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                    Rated
                  </p>
                  <p className="text-secondary">{animeDetail.rated}</p>
                </div>
                <div className="flex flex-col mt-4 w-full md:flex-col">
                  <p className="text-active uppercase text-raleway font-bold tracking-wider mb-2 md:text-base">
                    Synopsis
                  </p>
                  <p className="text-secondary">{animeDetail.synopsis}</p>
                </div>
              </div>
            </div>
          ))}
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
