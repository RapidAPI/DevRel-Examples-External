import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const make = req.query.make || "";
    const model = req.query.model || "";

    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "50",
        page: "0",
        make: make,
        model: model,
      },
      headers: {
        "x-rapidapi-host": "car-data.p.rapidapi.com",
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
