import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [string, setString] = useState(
    "RapidAPI Hub is world's largest API Hub."
  );
  const [selectedCase, setSelectedCase] = useState("upper");
  const [btnText, setBtnText] = useState("Convert");
  const [response, setResponse] = useState(null);

  const cases = [
    { case: "upper", label: "Uppercase" },
    { case: "lower", label: "Lowercase" },
    { case: "capital", label: "Capital case" },
    { case: "sentence", label: "Sentence case" },
    { case: "snake", label: "Snake case" },
    { case: "kebab", label: "Kebab case" },
    { case: "pascal", label: "Pascal case" },
    { case: "camel", label: "Camel case" },
    { case: "random", label: "Random case" },
    { case: "dot", label: "Dot case" },
    { case: "header", label: "Header case" },
    { case: "constant", label: "Constant case" },
  ];

  /**
   *
   *
   * Converts the string to the selected case
   */
  const convertString = async (e) => {
    e.preventDefault();
    setBtnText("Converting...");
    try {
      const res = await axios.get(`/api/convert`, {
        params: {
          string,
          case: selectedCase,
        },
      });

      console.log(res.data);
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
    setBtnText("Convert");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Text <span className="text-secondary">Case</span> App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Easily convert text between different letter cases
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-4/5 justify-center md:flex-col md:w-5/6">
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter some text..."
            value={string}
            onChange={(e) => setString(e.target.value)}
          />
          <select
            name="countries"
            className="border-none outline-none w-1/6 bg-primary ml-4 px-4 py-2 rounded-sm font-raleway md:w-full md:ml-0 md:mt-4"
            onChange={(e) => setSelectedCase(e.target.value)}
          >
            {cases.map((caseItem) => (
              <option value={caseItem.case} key={cases.indexOf(caseItem)}>
                {caseItem.label}
              </option>
            ))}
          </select>
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
            onClick={convertString}
          >
            {btnText}
          </button>
        </form>
        {response && (
          <p className=" mt-12 w-3/6 border border-secondary text-primary text-center font-raleway px-4 py-8 tracking-wide leading-8">
            {response.convertedText}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 mt-8 flex justify-center items-end h-36 md:h-44">
        <p className="text-primary pb-12 md:w-60 md:text-center">
          Made by RapidAPI DevRel Team -{" "}
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
