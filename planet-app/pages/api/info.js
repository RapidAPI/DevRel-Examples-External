import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://planets-by-api-ninjas.p.rapidapi.com/v1/planets",
      params: { name: req.query.planet },
      headers: {
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
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
