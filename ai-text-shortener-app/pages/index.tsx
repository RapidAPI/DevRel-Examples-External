import { useState } from "react";
import { Form } from "../components/Form";
import { Tweet } from "../components/Tweet";

export default function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto w-full max-w-lg py-24 space-y-24 min-h-screen flex flex-col justify-center">
      <div className="space-y-6 w-full text-center">
        <h1 className="text-6xl font-bold">Shorten AI</h1>
        <p className="text-xl">
          <span className="font-bold">
            Unlock the power of text summarization with AI Text Shortener
          </span>{" "}
          - the smart tool that makes summarizing long text as easy as a single
          click.
        </p>
      </div>
      <div className="space-y-4 w-full">
        <Form
          text={text}
          setText={setText}
          setSummary={setSummary}
          loading={loading}
          setLoading={setLoading}
        />
        <Tweet summary={summary} loading={loading} />
      </div>
    </div>
  );
}
