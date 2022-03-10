import axios from "axios";
import { useState } from "react";

export default function Home() {
  const exampleText = `According to RapidAPI’s recent State of APIs Developer survey, API usage continues to skyrocket, with more than 90.6% of developers indicating that they will use APIs more or the same in 2022 as they did in 2021. Additionally, a majority (75.5%) of developers indicated that participating in the API economy is a top priority for their organisation now or in the near future. As companies begin to accelerate the transition to digital channels and invest in software development to enable that transition, APIs have become increasingly important in enabling developers to build innovative software more rapidly.
  The increasing demand for APIs has led to the widespread usage of RapidAPI Hub, the world’s largest API Hub where over 3 million developers discover and connect to APIs.   RapidAPI’s largest enterprise customers leverage the RapidAPI Enterprise Hub – a private, customisable version of the public hub – to create a centralised repository of APIs and providing a governance layer for API activity in the organisation. RapidAPI Enterprise Hub provides organisations with a single place for all APIs, including any API type, any API category, and across any API infrastructure.`;

  const [text, setText] = useState(exampleText);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    try {
      setLoading(true);
      const res = await axios.post("api/summarize/", {
        text,
      });
      setResponse(res.data.summary);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        Text <span className="text-active">Summarizer</span>
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6">
        Summarise your text into a shorter length.
      </h2>
      <form
        className="flex md:flex-row flex-col justify-between mt-20 w-full"
        onSubmit={(e) => {
          getResponse();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="md:w-2/5 w-full">
          <label htmlFor="text" className=" text-sm font-medium text-primary">
            Enter your text
          </label>
          <div className="mt-2">
            <textarea
              rows={14}
              name="text"
              id="text"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
              defaultValue={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0 mt-4">
          <button
            className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Summarize</>
            )}
          </button>
        </div>
        <div className="md:w-2/5 md:mt-0 mt-4 w-full">
          <label
            htmlFor="summary"
            className=" text-sm font-medium text-primary"
          >
            Summarized text
          </label>
          <div className="mt-2">
            <textarea
              readOnly
              type="text"
              rows={14}
              name="summary"
              id="summary"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
              value={response}
            />
          </div>
        </div>
      </form>

      <div className="mt-20 opacity-70 text-center">
        <p className="text-primary text-xs">
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
