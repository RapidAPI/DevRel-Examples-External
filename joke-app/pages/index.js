import axios from "axios";
import { useState } from "react";

export default function Home({ allJokes }) {
  const [joke, setJoke] = useState(allJokes[0]);
  const [index, setIndex] = useState(0);

  /**
   *
   *
   * Show next joke
   */
  const nextJoke = () => {
    if (index === 28) {
      return;
    }

    let tempIndex = index;
    tempIndex++;
    setJoke(allJokes[tempIndex]);
    setIndex(tempIndex);
  };

  /**
   *
   *
   * Show previous joke
   */
  const prevJoke = () => {
    if (index === 0) {
      return;
    }

    let tempIndex = index;
    tempIndex--;
    setJoke(allJokes[tempIndex]);
    setIndex(tempIndex);
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        <span className="text-active">Jokes</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-8 md:text-base md:px-4 md:text-center">
        An App For A Good Laugh
      </h3>
      <div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
        <p className="mb-12 border border-secondary text-secondary font-raleway px-4 py-8 tracking-wide leading-8">
          {joke.joke}
        </p>
        <div className="flex justify-center md:flex-col md:items-center">
          <button
            className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4"
            onClick={prevJoke}
          >
            Previous
          </button>
          <button
            className="outline-none w-48 border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-danger hover:text-secondary md:ml-0 md:mt-4"
            onClick={nextJoke}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-10 justify-end h-36">
        <p className="block mb-10 text-center text-secondary text-xs">
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

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/joke");
  const { data } = res;

  const allJokes = data.slice(1);

  if (!allJokes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allJokes,
    },
  };
}
