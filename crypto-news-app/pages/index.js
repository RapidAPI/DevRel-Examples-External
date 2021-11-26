import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  const getNews = async () => {
    try {
      const res = await axios.get("api/news/", {
        params: { page },
      });
      const { data } = res;
      setResponse(data.data[0].screen_data.news);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl text-primary font-bold mt-20">
        Crypto News <span className="text-active">App</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Next.js app which provides information latest news about Crypto using
        Cryptocurrency API
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <div className="mt-4 sm:mt-0 sm:ml-3">
          {!response && (
            <button
              className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
              onClick={() => getNews()}
            >
              Get Latest News
            </button>
          )}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-16 max-w-5xl">
        {response &&
          response.map((news) => {
            return (
              <div className="mt-10 grid justify-items-center">
                <img
                  src={news.related_image_big}
                  width="300"
                  length="300"
                  className="rounded-lg"
                ></img>
                <a
                  className="text-primary text-center hover:text-active transition-colors duation-200"
                  key={news.news_ID}
                  href={news.news_link ? news.news_link : news.third_party_url}
                >
                  <h3 className="mt-10 text-2xl">{news.HEADLINE}</h3>
                  <p className="mt-4 text-center text-lg opacity-60">
                    {news.news_provider_name}
                  </p>
                </a>
              </div>
            );
          })}
      </div>

      {response && (
        <div className="flex flex-col mt-10 justify-center">
          <button
            className="block text-active text-base font-bold"
            onClick={() => {
              setPage(page + 1);
              getNews();
            }}
          >
            Load next page &rarr;
          </button>

          <p className="block mt-10 mb-10 text-center text-secondary text-xs">
            Made by RapidAPI DevRel Team -{" "}
            <a
              className="hover:text-active"
              href="https://github.com/RapidAPI/DevRel-Examples-External"
            >
              See more examples like this
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
