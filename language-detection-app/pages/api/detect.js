import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/Detect",
      params: { "api-version": "3.0" },
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: [
        {
          Text: req.body.text,
        },
      ],
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

  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://microsoft-translator-text.p.rapidapi.com/languages",
      params: { "api-version": "3.0" },
      headers: {
        "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
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
