import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://spam-check.p.rapidapi.com/spamcheck",
    params: { text: req.query.text },
    headers: {
      "x-rapidapi-host": "spam-check.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}
