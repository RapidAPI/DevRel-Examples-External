import axios from "axios";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-secondary pt-20 pb-6 md:text-3xl">
        Weather <span className="text-active">News</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-16 md:text-base md:px-4 md:text-center">
        Get All Your weather-related News at one place
      </h3>
      {data.articles.map((news) => {
        return (
          <div
            className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-active text-secondary cursor-pointer transition duration-300 hover:border-secondary hover:text-active md:w-80 md:h-40"
            key={data.articles.indexOf(news)}
          >
            <Link href={news.url}>
              <a>
                <h3>{news.title}</h3>
                <p className="text-sm pt-4">Source: {news.source}</p>
              </a>
            </Link>
          </div>
        );
      })}
      <div className="flex flex-col mt-10 justify-end h-36">
        <p className="block mb-10 text-center text-secondary text-xs">
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

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/news");
  const { data } = res;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
