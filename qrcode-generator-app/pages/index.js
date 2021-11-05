import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import SVG from "react-inlinesvg";

export default function Home() {
  const [input, setInput] = useState(null);
  const [response, setResponse] = useState(null);

  const getQrcode = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/qrcode/", {
        params: { input },
      });

      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadQrcode = () => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const urlObject = document.createElement("a");
    urlObject.href = url;
    urlObject.setAttribute("download", "file.svg");
    document.body.appendChild(urlObject);
    urlObject.click();
  };

  return (
    <div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold text-primary mt-10">
        QR Code <span className="text-active">Generator</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Generate a QR Code for sharing your content.
      </h2>
      <input
        type="text"
        placeholder="Enter a link, number or any text to generate the QR Code"
        className="mt-10 text-sm w-1/2 p-4 rounded"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="mt-6 p-4 bg-active hover:opacity-90 rounded text-primary font-bold inline-flex"
        onClick={() => getQrcode()}
      >
        Generate QR Code
      </button>
      {response && (
        <div className="mt-10 bg-active">
          <SVG src={response} />
          <button
            className="w-full text-primary px-2"
            onClick={() => downloadQrcode()}
          >
            Download
          </button>
        </div>
      )}
      <div className="absolute bottom-6">
        <p className="text-primary text-xs">
          Made by RapidAPI DevRel Team -{" "}
          <a href="https://github.com/RapidAPI/DevRel-Examples-External">
            See more examples like this
          </a>
        </p>
      </div>
    </div>
  );
}
