import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "POST",
      url: "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host":
          "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: { language: "en", strength: 3, text: req.query.content },
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
