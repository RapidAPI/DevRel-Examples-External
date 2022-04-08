import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://title-case-converter.p.rapidapi.com/v1/TitleCase",
      params: { title: req.query.title, style: "AMA" },
      headers: {
        "X-RapidAPI-Host": "title-case-converter.p.rapidapi.com",
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
