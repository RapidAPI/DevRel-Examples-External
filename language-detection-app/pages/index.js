import { useState } from "react";
import axios from "axios";

export default function Home({ value: lang }) {
  const [text, setText] = useState("");
  const [detectedLang, setDetectedLang] = useState("");

  /**
   *
   *
   * Detect text language
   */
  const fetchTextInfo = async () => {
    try {
      setDetectedLang(`Detecting language...`);
      const res = await axios.post(`/api/detect`, { text });
      const { data } = res;
      setDetectedLang(
        `The text is written in ${
          lang.dictionary[data[0].language].name
        } language. And the language's native name is ${
          lang.dictionary[data[0].language].nativeName
        }.`
      );
    } catch (err) {
      setDetectedLang(`Language couldn't be detected.`);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Language <span className="text-danger">Detection</span> App
      </h2>
      <h3 className="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        See which language the text is from
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
          placeholder="Write/paste any content..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex items-center">
          <button
            className="h-1/6 outline-none border border-danger font-bold font-raleway mx-12 px-12 rounded-sm bg-danger text-bc transition duration-300 hover:bg-bc hover:text-primary md:h-16 md:my-12"
            onClick={fetchTextInfo}
          >
            Detect
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway bg-bc text-primary md:w-full"
          placeholder="Text Language..."
          value={detectedLang}
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

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/detect");
  const { data: value } = res;

  if (!value) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      value,
    },
  };
}
