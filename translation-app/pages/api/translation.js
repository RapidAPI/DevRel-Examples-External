import axios from "axios";

export default async function handler(req, res) {
  const { q, target } = req.query;

  const query = decodeURIComponent(q);

  if (req.method === "GET") {
    const options = {
      method: "POST",
      url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY,
      },
      data: { q: query, target, source: "en" },
    };

    axios
      .request(options)
      .then(function (response) {
        res.json(response?.data?.data?.translations?.translatedText);
      })
      .catch(function (error) {
        console.error("There was some error while translating the text!");
      });
  } else {
    res.status(400);
  }
}
