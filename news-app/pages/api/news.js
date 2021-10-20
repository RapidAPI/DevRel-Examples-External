import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_BING_NEWS_API_KEY,
      },
    };

    console.log();

    axios
      .request(options)
      .then(function (response) {
        const { data } = response;
        const { value } = data;

        res.status(200).json(value);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
