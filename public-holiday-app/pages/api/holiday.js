import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const year = req.query.year || 2021;
    const options = {
      method: "GET",
      url: `https://public-holiday.p.rapidapi.com/${year}/US`,
      headers: {
        "x-rapidapi-host": "public-holiday.p.rapidapi.com",
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
  } else {
    res.status(400);
  }
}
