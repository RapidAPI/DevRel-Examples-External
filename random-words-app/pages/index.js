import { useState } from "react";
import axios from "axios";

export default function Home({ data }) {
  const [word, setWord] = useState(data[0].word);
  const [definition, setDefinition] = useState(data[0].definition);
  const [pronunciation, setPronunciation] = useState(data[0].pronunciation);

  const getWord = async () => {
    try {
      const res = await axios.get(`/api/word`);
      setWord(res.data[0].word);
      setDefinition(res.data[0].definition);
      setPronunciation(res.data[0].pronunciation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Random <span className="text-active">Words App</span>
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Learn some new English words
      </h3>
      <div className="flex flex-col mt-4 w-2/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
        <div className="border border-secondary text-secondary font-raleway mb-12 ">
          <p className="px-4 py-4 tracking-wide leading-8">Word: {word}</p>
          <p className="px-4 py-4 tracking-wide leading-8">
            Definition: {definition}
          </p>
          <p className="px-4 py-4 tracking-wide leading-8">
            Pronunciation: {pronunciation}
          </p>
        </div>
        <button
          className="outline-none w-full border border-active font-bold font-raleway  px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
          onClick={getWord}
        >
          New Word
        </button>
        <a className="hover:text-active" href="/dutch">
          <button
            className="outline-none mt-4 w-full border border-active font-bold font-raleway  px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-secondary md:ml-0 md:mt-4"
          >
            New Dutch Word
          </button>
        </a>
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-secondary text-xs">
          Made by{" "}
          <a className="hover:text-active" href="https://github.com/mcnaveen">
            MC.Naveen
          </a>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/word");
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
