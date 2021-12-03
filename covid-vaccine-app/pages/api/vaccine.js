import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!req.query.countryCode) {
      const options = {
        method: "GET",
        url: "https://covid-19-world-vaccination-data.p.rapidapi.com/",
        params: { iso: "ABW" },
        headers: {
          "x-rapidapi-host": "covid-19-world-vaccination-data.p.rapidapi.com",
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
        url: "https://covid-19-world-vaccination-data.p.rapidapi.com/",
        params: { iso: req.query.countryCode },
        headers: {
          "x-rapidapi-host": "covid-19-world-vaccination-data.p.rapidapi.com",
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
