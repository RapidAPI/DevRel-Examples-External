// head for seo
import Head from "next/head";

// React useState hook for maintaining local state
import { useState } from "react";

// axios
import axios from "axios";

// react hot toast
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [translateTo, setTranslateTo] = useState("French");
  const [translatedText, setTranslatedText] = useState("");

  // all the languages supported by the app
  const languages = [
    { name: "French", code: "fr" },
    { name: "Spanish", code: "es" },
    { name: "Russian", code: "ru" },
    { name: "Hindi", code: "hi" },
    { name: "Bengali", code: "bn" },
    { name: "Arabic", code: "ar" },
    { name: "Marathi", code: "mr" },
    { name: "Italian", code: "it" },
    { name: "Dutch", code: "nl" },
    { name: "Portuguese", code: "pt" },
  ];

  // function that translates the text
  const translate = () => {
    if (!text || text[0] === " ") return toast.error("Please enter some text!");

    const options = {
      method: "POST",
      url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY,
      },
      data: { q: text, target: selectedLanguage, source: "en" },
    };

    axios
      .request(options)
      .then(function (response) {
        setTranslatedText(response?.data?.data?.translations?.translatedText);

        toast.success("Successfully translated the text!");
      })
      .catch(function (error) {
        console.error(error);

        toast.error("There was some error while translating the text!");
      });
  };

  // function that copies the translated text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);

    toast.success("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Translation App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This app will help you translate text from English to French/Spanish/Russian/Hindi/Bengali/Arabic/Marathi/Italian/Dutch/Portuguese!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prashoonb" />
        <meta name="twitter:creator" content="@prashoonb" />
        <meta property="og:title" content="Translation App" />
        <meta
          property="og:description"
          content="This app will help you translate text from English to French/Spanish/Russian/Hindi/Bengali/Arabic/Marathi/Italian/Dutch/Portuguese!"
        />
        <meta property="og:url" content="https://rapidapi-example-translation-app.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="Translation App" />
        <meta property="og:image:width" content="48" />
        <meta property="og:image:height" content="48" />
        <meta property="og:site_name" content="Translation App" />
        <link rel="canonical" href="https://rapidapi-example-translation-app.vercel.app/" />
      </Head>

      <header className="mt-2">
        <h1 className="text-6xl font-bold">📄 Translation App</h1>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <select className="outline-none invisible">
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>

            <textarea
              className="m-10 outline-none border-2 p-4 h-[200px] w-[400px]"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col items-center">
            <select
              className="border-2 outline-none"
              onChange={(e) => {
                setSelectedLanguage(e.target.value);

                switch (e.target.value) {
                  case "fr":
                    setTranslateTo("French");
                    break;
                  case "es":
                    setTranslateTo("Spanish");
                    break;
                  case "ru":
                    setTranslateTo("Russian");
                    break;
                  case "bn":
                    setTranslateTo("Bengali");
                    break;
                  case "ar":
                    setTranslateTo("Arabic");
                    break;
                  case "mr":
                    setTranslateTo("Marathi");
                    break;
                  case "it":
                    setTranslateTo("Italian");
                    break;
                  case "nl":
                    setTranslateTo("Dutch");
                    break;
                  case "pt":
                    setTranslateTo("Portuguese");
                    break;
                  case "hi":
                    setTranslateTo("Hindi");
                    break;
                  default:
                    setTranslateTo("French");
                    break;
                }
              }}
              value={selectedLanguage}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>

            <textarea
              className="m-10 outline-none border-2 p-4 h-[200px] w-[400px]"
              readOnly={true}
              value={translatedText}
            ></textarea>
          </div>
        </div>

        <button onClick={translate} className="bg-gray-200 p-4">
          Translate to {translateTo}
        </button>

        <button
          onClick={copyToClipboard}
          className="bg-gray-200 p-4 mt-4 flex flex-row items-center"
          disabled={!translatedText}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>

          <p className="ml-2">Copy translated text to clipboard</p>
        </button>
      </main>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
