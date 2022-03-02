import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState(
    "All new members who join after 12:00pm EST on December 1st will pay either $29/month or $299/year.  If you join right now you can join at either $20/month or $197/year (or possibly much lower, if you live outside the US). It's your last chance to save 20% off annual plans with code GET20."
  );
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResponse = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/check/", {
        params: { text },
      });
      const spamScore = (res.data.spamScore * 100).toFixed(2);
      setResponse(spamScore);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
      <h1 className="text-6xl font-bold text-primary mt-10">
        <span className="text-active">Spam</span> Checker
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6">
        Check any text for spam
      </h2>
      <form
        className="mt-20 w-1/2"
        onSubmit={(e) => {
          getResponse();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="w-full">
          <label htmlFor="text" className=" text-sm font-medium text-primary">
            Enter your text
          </label>
          <div className="mt-2">
            <textarea
              rows={6}
              name="text"
              id="text"
              className="focus:outline-none focus:ring-2 w-full focus:ring-active text-base p-2 rounded-md"
              defaultValue={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            className="w-full rounded-lg px-5 py-3 bg-active text-base font-bold text-background hover:bg-primary sm:px-10"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Check</>
            )}
          </button>
        </div>
      </form>

      {response && (
        <div className="mt-10">
          <span className="text-2xl text-primary">
            <span className="text-active">Result: </span>
            The text is <span className="font-bold">{response}%</span> spam.
          </span>
        </div>
      )}

      <div className="mt-10 text-center">
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
