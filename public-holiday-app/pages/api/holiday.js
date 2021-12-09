import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.year) {
      const options = {
        method: "GET",
        url: `https://public-holiday.p.rapidapi.com/${req.query.year}/US`,
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
      const options = {
        method: "GET",
        url: "https://public-holiday.p.rapidapi.com/2021/US",
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
    }
  } else {
    res.status(400);
  }
}
