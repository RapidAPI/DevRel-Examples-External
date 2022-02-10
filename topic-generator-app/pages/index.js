import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [content, setContent] = useState(
    `Computer science is the scientific and practical approach to computation and its applications. It is the systematic study of the feasibility, structure, expression, and mechanization of the methodical procedures (or algorithms) that underlie the acquisition, representation, processing, storage, communication of, and access to information, whether such information is encoded as bits in a computer memory or transcribed in genes and protein structures in a biological cell. An alternate, more succinct definition of computer science is the study of automating algorithmic processes that scale. A computer scientist specializes in the theory of computation and the design of computational systems.`
  );
  const [res, setRes] = useState("");
  const [btnText, setBtnText] = useState("Generate");

  /**
   *
   *
   * Generate topics and keywords
   */
  const generateTopicKeyword = async () => {
    try {
      setBtnText("Generating...");
      const response = await axios.get("/api/generate", {
        params: { content },
      });
      const { data } = response;

      const keywords = Object.keys(data.keyword).join(", ");
      const topics = Object.keys(data.topic).join(", ");

      const resString = `Keywords: ${keywords}. \n\nTopics: ${topics}.`;
      setRes(resString);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Generate");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Topic <span className="text-secondary">Generator</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Automatically generate topics and keywords for articles and blogs
      </h3>
      <div className="flex justify-between w-5/6 h-96 mt-8 md:flex-col md:items-center md:justify-start">
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5 px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Write/paste any content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center">
          <button
            className="h-1/6 outline-none border border-secondary font-bold font-raleway mx-12 px-12 rounded-sm bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-16 md:my-12"
            onClick={generateTopicKeyword}
          >
            {btnText}
          </button>
        </div>
        <textarea
          type="text"
          className="border border-primary outline-none w-2/5  px-4 py-2 rounded-sm font-raleway md:w-full"
          placeholder="Topics and keywords will appear here..."
          value={res}
        />
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-primary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a
            className="hover:text-secondary"
            href="https://github.com/RapidAPI/DevRel-Examples-External"
          >
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
