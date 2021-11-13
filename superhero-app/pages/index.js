import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [superheroInfo, setSuperheroInfo] = useState(null);

  /**
   *
   *
   * Fetch superhero info
   */
  const fetchSuperheroInfo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/superhero`, {
        params: { name },
      });
      const { data } = res;
      setSuperheroInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-active">Superhero</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Search for your favorite superhero
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter the name of superhero..."
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4"
            onClick={fetchSuperheroInfo}
          >
            Search
          </button>
        </form>
        {superheroInfo && (
          <div className="flex mt-12 w-3/6 h-4/5 border border-primary md:flex-col md:w-4/6 md:h-full md:mb-12">
            <Image
              src={superheroInfo.images.lg}
              width={220}
              height={300}
              alt="{movieInfo.title}"
            />
            <div className="flex flex-col justify-center ml-8 md:mt-6 w-3/6">
              <div className="flex justify-between w-full md:flex-col">
                <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                  Real Name
                </p>
                <p className="text-secondary">
                  {superheroInfo.biography.fullName}{" "}
                </p>
              </div>
              <div className="flex justify-between mt-4 w-full md:flex-col">
                <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                  Superhero Name
                </p>
                <p className="text-secondary">{superheroInfo.name} </p>
              </div>
              <div className="flex justify-between mt-4 w-full md:flex-col">
                <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                  Intelligence
                </p>
                <p className="text-secondary">
                  {`${superheroInfo.powerstats.intelligence}/100`}
                </p>
              </div>
              <div className="flex justify-between mt-4 w-full md:flex-col">
                <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                  Strength
                </p>
                <p className="text-secondary">{`${superheroInfo.powerstats.strength}/100`}</p>
              </div>
              <div className="flex justify-between mt-4 w-full md:flex-col">
                <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                  Speed
                </p>
                <p className="text-secondary">{`${superheroInfo.powerstats.speed}/100`}</p>
              </div>
              <div className="flex justify-between mt-4 w-full md:flex-col">
                <p className="text-active uppercase text-raleway font-bold tracking-wider md:text-base">
                  Durability
                </p>
                <p className="text-secondary">{`${superheroInfo.powerstats.durability}/100`}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-36 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            <span className="transition duration-300 hover:text-secondary">
              See Examples Like this
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
