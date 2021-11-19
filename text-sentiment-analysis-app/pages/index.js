import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [content, setContent] = useState("");
  const [analysis, setAnalysis] = useState("");

  /**
   *
   *
   * Fetch Analysis of the content
   */
  const fetchAnalysis = async () => {
    try {
      setAnalysis(`Analysing content...`);
      const res = await axios.post(`/api/analyse`, {
        content,
      });
      const { data } = res;

      const msg = `Your text sounds ${data.sentiment}. It has ${Math.floor(
        data.aggregate_sentiment.pos * 100
      )}% positivity, and ${Math.floor(
        data.aggregate_sentiment.neg * 100
      )}% negativity. It has a neutral level of ${Math.floor(
        data.aggregate_sentiment.neu * 100
      )}%.`;
      setAnalysis(msg);
    } catch (err) {
      setAnalysis(`Couldn't analyse the content.`);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Text <span className="text-secondary">Sentiment</span> Analysis App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check how your text sounds
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center">
          <button
            className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12"
            onClick={fetchAnalysis}
          >
            Analyse
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Analysis..."
          value={analysis}
          readOnly
        />
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            See Examples Like this
          </a>
        </p>
      </div>
    </div>
  );
}
