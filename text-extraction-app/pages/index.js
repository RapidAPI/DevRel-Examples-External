import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [extractedText, setExtractedText] = useState(null);

  /**
   *
   *
   * Fetch extracted content from the url
   */
  const fetchExtractedContent = async () => {
    try {
      const res = await axios.get(`/api/extract`, {
        params: { url },
      });
      const { data } = res;
      const { text } = data;

      setExtractedText(text);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Text <span className="text-active">Extraction</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly Extract Text of Any Webpage
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            type="text"
            className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm bg-lightGrey text-secondary font-bold font-raleway md:w-full"
            placeholder="Paste the article link..."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-bc hover:text-secondary hover:border-secondary md:h-16 md:my-12 md:ml-0"
            onClick={fetchExtractedContent}
          >
            Extract Text
          </button>
        </div>

        {extractedText && (
          <textarea
            type="text"
            className="bg-lightGrey text-secondary border border-primary outline-none w-3/5 h-96 mt-12 px-4 py-2 rounded-sm font-raleway md:w-5/6 md:mt-2 md: h-48"
            value={extractedText}
          />
        )}
      </div>
      <div className="absolute bottom-0 flex justify-center items-end h-52 md:h-44">
        <p className="text-secondary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team –{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            <span className="transition duration-300 hover:text-active">
              See Examples Like this
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
