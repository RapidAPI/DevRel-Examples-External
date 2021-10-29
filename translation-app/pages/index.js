// React useState hook for maintaining local state
import { useState } from "react";

// axios
import axios from "axios";

// react hot toast
import { toast, Toaster } from "react-hot-toast";

// all the languages supported by the app
import languages from "../data/languages.json";
import TextBox from "../components/TextBox";
import Button from "../components/Button";

export default function Home() {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const [translateTo, setTranslateTo] = useState("French");
  const [translatedText, setTranslatedText] = useState("");

  // function that translates the text
  const translate = async () => {
    if (!text || text[0] === " ") return toast.error("Please enter some text!");

    const urlEncodedText = encodeURIComponent(text);

    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}?q=${urlEncodedText}&target=${selectedLanguage}`
      )
      .then(function (response) {
        setTranslatedText(response.data);

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
      <header className="header">
        <h1 className="text-6xl font-bold">📄 Translation App</h1>
      </header>

      <main className="main">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <select className="outline-none invisible">
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>

            <TextBox value={text} setValue={setText} />
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

            <TextBox value={translatedText} readOnly={true} />
          </div>
        </div>

        <Button className="bg-gray-200 p-4" onClick={translate}>
          Translate to {translateTo}
        </Button>

        <Button
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
        </Button>
      </main>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
