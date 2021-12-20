import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: `https://nameauditor-whois-check.p.rapidapi.com/whois/${req.query.keyword}`,
    headers: {
      "x-rapidapi-host": "nameauditor-whois-check.p.rapidapi.com",
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
      res.status(500).json(error.response.data.payload);
    });
}
