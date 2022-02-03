import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://grammarbot.p.rapidapi.com/check",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-host": "grammarbot.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      params: { text: req.body.text, language: "en-US" },
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
