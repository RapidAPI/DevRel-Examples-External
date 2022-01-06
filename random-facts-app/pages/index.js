import { useState } from "react";
import axios from "axios";

export default function Home({ data }) {
  const [fact, setFact] = useState(data.Fact);

  /**
   *
   *
   * get random facts
   */
  const getFact = async () => {
    try {
      const res = await axios.get(`/api/fact`);
      setFact(res.data.Fact);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Random <span className="text-active">Facts</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Take A Look At Some Random Interesting Facts
      </h3>
      <div className="flex flex-col mt-4 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
        <div className="border border-secondary text-secondary font-raleway mb-12 ">
          <p className="px-4 py-4 tracking-wide leading-8">{fact}</p>
        </div>
        <button
          className="outline-none w-48 border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
          onClick={getFact}
        >
          New Fact
        </button>
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
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
  const res = await axios.get("http://localhost:3000/api/fact");
  const { data } = res;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
