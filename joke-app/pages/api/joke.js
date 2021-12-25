import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    var options = {
      method: "GET",
      url: "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes",
      params: { limit: "30" },
      headers: {
        "x-rapidapi-host": "jokes-by-api-ninjas.p.rapidapi.com",
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
