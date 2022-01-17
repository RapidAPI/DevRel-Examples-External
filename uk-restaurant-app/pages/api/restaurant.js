import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: `https://wyre-data.p.rapidapi.com/restaurants/localauthority/${req.query.area}`,
      headers: {
        "x-rapidapi-host": "wyre-data.p.rapidapi.com",
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
