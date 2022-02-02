import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: `https://realstonks.p.rapidapi.com/${req.query.stock}`,
      headers: {
        "x-rapidapi-host": "realstonks.p.rapidapi.com",
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
        res.status(response.status);
      });
  } else {
    res.status(400);
  }
}
