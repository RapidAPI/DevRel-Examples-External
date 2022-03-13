import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://linguatools-sentence-generating.p.rapidapi.com/realise",
      params: {
        object: req.query.object,
        subject: req.query.subject,
        verb: req.query.verb,
      },
      headers: {
        "x-rapidapi-host": "linguatools-sentence-generating.p.rapidapi.com",
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
