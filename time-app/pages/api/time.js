import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.timezone) {
      const newTimezone = req.query.timezone.split("/");
      const options = {
        method: "GET",
        url: `https://world-time2.p.rapidapi.com/timezone/${newTimezone[0]}/${newTimezone[1]}`,
        headers: {
          "x-rapidapi-host": "world-time2.p.rapidapi.com",
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
      var options = {
        method: "GET",
        url: "https://world-time2.p.rapidapi.com/timezone/Africa/Abidjan",
        headers: {
          "x-rapidapi-host": "world-time2.p.rapidapi.com",
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
