import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [object, setObject] = useState("thief");
  const [subject, setSubject] = useState("police");
  const [verb, setVerb] = useState("arrest");
  const [response, setResponse] = useState(null);
  const [btnText, setBtnText] = useState("Generate");

  /**
   *
   *
   * Fetch generated sentence
   */
  const fetchGeneratedSentence = async (e) => {
    e.preventDefault();
    setBtnText("Generating");
    try {
      const res = await axios.get(`/api/generate`, {
        params: {
          object,
          subject,
          verb,
        },
      });
      setResponse(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setBtnText("Generate");
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Sentence <span className="text-secondary">Generator</span> App
      </h2>
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Quickly generate an english sentence using few keywords
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6">
          <input
            type="text"
            value={subject}
            autoFocus={true}
            className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
            placeholder="Subject..."
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            value={object}
            className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
            placeholder="Object..."
            onChange={(e) => setObject(e.target.value)}
          />
          <input
            type="text"
            value={verb}
            className="border-none outline-none w-1/5 bg-primary px-4 py-2 mx-2 rounded-sm font-raleway md:w-full md:my-2"
            placeholder="Verb..."
            onChange={(e) => setVerb(e.target.value)}
          />
          <button
            className="outline-none border border-secondary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-secondary text-bc transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={(e) => fetchGeneratedSentence(e)}
          >
            {btnText}
          </button>
        </form>
        {response && (
          <div className="flex flex-col mt-20 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12">
            <p className="mb-12 border border-secondary text-primary font-raleway px-4 py-8 tracking-wide leading-8">
              {response.sentence}
            </p>
          </div>
        )}
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
