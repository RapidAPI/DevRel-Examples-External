import { useEffect, useState } from "react";

// formatting date
import { formatRelative } from "date-fns";

// icons
import { FiCheck } from "react-icons/fi";

import axios from "axios"; // fetching
import Head from "next/head"; // head for seo

// confetti animation
import ConfettiGenerator from "confetti-js";

// react hot toast
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  const [URL, setURL] = useState("https://google.com/");
  const [isValidURL, setIsValidURL] = useState(false);
  const [shortenedURL, setShortenedURL] = useState("");

  // success state
  const [success, setSuccess] = useState(false);

  // history
  const [pastShortenedURLs, setPastShortenedURLs] = useState();

  useEffect(() => {
    // get history of shortened URLs
    if (window.localStorage.getItem("history")) {
      setPastShortenedURLs(JSON.parse(window.localStorage.getItem("history")));
    } else {
      window.localStorage.setItem("history", JSON.stringify([]));
    }
  }, []);

  // fetch Rapid API to shorten the URLs
  const shortenURL = () => {
    const shortURL = axios
      .post(
        "https://url-shortener-service.p.rapidapi.com/shorten?",
        { url: URL },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "content-type": "application/json",
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((response) => {
        // confetti animation
        document.getElementById("my-canvas").style.display = "block"; // making canvas visible

        const confettiSettings = { target: "my-canvas", max: "200" };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        // making success state true
        setSuccess(true);

        // setting shortened URL
        setShortenedURL(response.data.result_url);

        // copying shortened URL to clipboard
        navigator.clipboard.writeText(response.data.result_url);

        // setting history
        setPastShortenedURLs([
          ...pastShortenedURLs,
          {
            url: response.data.result_url,
            time: Math.floor(new Date().getTime() / 1000),
          },
        ]);
        window.localStorage.setItem(
          "history",
          JSON.stringify([
            ...pastShortenedURLs,
            {
              url: response.data.result_url,
              time: Math.floor(new Date().getTime() / 1000),
            },
          ])
        );

        // removing confetti animation after 5 seconds
        setTimeout(() => {
          document.getElementById("my-canvas").style.display = "none";
        }, [7500]);
      })
      .catch((e) => {
        console.error(e);
      });

    // toasting different states
    toast.promise(shortURL, {
      loading: "Shortening your URL...",
      success: `Success! Shortened URL Copied to your clipboard!`,
      error: "ESomething error occurred",
    });
  };

  // submit function to shorten the URL
  const onSubmit = () => {
    if (isValidURL) {
      shortenURL();
    } else {
      toast.error("Please enter a valid URL"); // is not valid URL
    }
  };

  useEffect(() => {
    // check if the URL is valid
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    setIsValidURL(pattern.test(URL)); // setting isValidURL state
  }, [URL]);

  // function to format time in milliseconds as words
  const formatDate = (date) => {
    let formattedDate = "";
    if (date) {
      // Convert the date in words relative to the current date
      formattedDate = formatRelative(date, new Date());
      // Uppercase the first letter
      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
  };

  // clear history
  const clearHistory = () => {
    setPastShortenedURLs([]);
    window.localStorage.setItem("history", JSON.stringify([]));

    // toasting success
    toast.success("History cleared!");
  };

  return (
    <div
      className="bg-[#f1efe5] h-full w-screen"
      style={{ background: success && "#a7f3d085" }}
    >
      <Head>
        <title>URL Shortner - Short URLs, Better Clicks</title>
        <meta
          name="description"
          content="Simple and fast tool to create a shortened URL making it easy to
          remember and share."
        />
      </Head>
      <canvas
        id="my-canvas"
        className="fixed top-0 left-0 h-full z-[0]"
      ></canvas>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="min-h-screen h-full w-full flex items-center justify-center flex-col py-[20vh] text-[#222] z-10 relative">
        {success ? (
          <div className="flex items-center justify-center flex-col transition duration-500">
            <h1 className="font-bold text-4xl">🎉 Success, shortened URL</h1>
            <p className="my-2 text-[#666]">
              Successfully shortened the URL. Here you have it.
              <a
                className="bg-white p-2 text-blue-600 underline"
                href={shortenedURL}
              >
                {shortenedURL}
              </a>
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col transition duration-500">
            <h1 className="font-bold text-4xl">Short URLs, Better Clicks</h1>
            <p className="my-2 text-[#666]">
              Simple and fast tool to create a shortened URL making it easy to
              remember and share.
            </p>
          </div>
        )}
        <div className="p-4 bg-white shadow-xl rounded-md flex items-center mt-3 border border-[#ccc] focus-within:border-blue-400 group transition duration-500">
          <input
            type="text"
            className="outline-none h-full w-[500px] text-xl text-[#444]"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                onSubmit();
              }
            }}
          />
          <FiCheck
            className="text-2xl cursor-pointer"
            style={{ color: isValidURL ? "#38b000" : "#f0f" }}
            onClick={onSubmit}
          />
        </div>
        {pastShortenedURLs && pastShortenedURLs.length > 0 && (
          <div className="mt-[20vh] flex items-center justify-center flex-col w-full">
            <h1 className="font-bold text-3xl">Your History</h1>
            <p className="text-[#666] mb-3">
              Here are the URLs you shortened before.
            </p>
            <table className="table-auto !p-3 border-separate border border-[#ccc] bg-white !rounded-md shadow-xl m-2 w-[700px]">
              <thead>
                <tr>
                  <th className="text-2xl">No.</th>
                  <th className="text-2xl">URL</th>
                  <th className="text-2xl">Time</th>
                </tr>
              </thead>
              <tbody>
                {pastShortenedURLs.map(({ url, time }, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}.</td>
                    <td className="text-center">
                      <a
                        href={url}
                        className="text-blue-900 underline"
                        target="_blank"
                      >
                        {url}
                      </a>
                    </td>
                    <td className="text-center text-[#333]">
                      {formatDate(new Date(time * 1000))}
                    </td>
                  </tr>
                ))}
              </tbody>
              <button
                className="bg-red-500 px-2 py-1 rounded-md text-white text-sm mt-4 hover:bg-red-700 transition duration-500"
                onClick={clearHistory}
              >
                Clear History
              </button>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
