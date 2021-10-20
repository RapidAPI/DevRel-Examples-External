import Link from "next/link";
import axios from "axios";

export default function Home({ value }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-10 md:text-lg">
        Get Top <span className="text-danger">News</span> Quickly
      </h3>
      {value.map((news) => {
        return (
          <div
            className="flex items-center text-lg px-10 mb-10 font-light font-raleway h-32 w-3/6 rounded-sm border-2 border-danger text-lightYellow cursor-pointer transition duration-300 hover:border-primary hover:text-danger md:w-80 md:h-40"
            key={value.indexOf(news)}
          >
            <Link href={news.url}>
              <a>
                <h3>{news.name}</h3>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    "https://rapidapi-example-news-app.vercel.app/api/news"
  );
  const { data: value } = res;

  if (!value) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      value,
    },
  };
}
