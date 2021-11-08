import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: req.query.term, locale: "en-US", offset: "0", limit: "10" },
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
