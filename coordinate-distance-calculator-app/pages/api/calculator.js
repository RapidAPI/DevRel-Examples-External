import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://distance-calculator.p.rapidapi.com/v1/one_to_one",
      params: {
        start_point: req.query.firstCoordinateSet,
        end_point: req.query.secondCoordinateSet,
        unit: "miles",
        decimal_places: "2",
      },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "distance-calculator.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        res.status(404).json(error);
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
