import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "text-analysis12.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: { language: "english", text: req.body.content },
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
