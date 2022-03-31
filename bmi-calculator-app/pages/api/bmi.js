import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const weight = req.query.weight || 0;
    const height = req.query.height || 0;

    const options = {
      method: "GET",
      url: "https://body-mass-index-bmi-calculator.p.rapidapi.com/metric",
      params: { weight, height },
      headers: {
        "X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
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
