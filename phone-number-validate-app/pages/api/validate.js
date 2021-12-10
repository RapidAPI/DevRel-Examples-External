import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://neutrinoapi-phone-validate.p.rapidapi.com/phone-validate",
      headers: {
        "x-rapidapi-host": "neutrinoapi-phone-validate.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: { number: req.body.number },
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
