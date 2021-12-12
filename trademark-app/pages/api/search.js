import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: `https://uspto-trademark.p.rapidapi.com/v1/trademarkSearch/${req.query.keyword}/active`,
    headers: {
      "x-rapidapi-host": "uspto-trademark.p.rapidapi.com",
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
