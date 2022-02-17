import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://random-user.p.rapidapi.com/getuser",
      headers: {
        "x-rapidapi-host": "random-user.p.rapidapi.com",
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
