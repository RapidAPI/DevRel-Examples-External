import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://website-screenshot6.p.rapidapi.com/screenshot",
    params: {
      url: req.query.url,
      width: "1920",
      height: "1080",
      fullscreen: "false",
    },
    headers: {
      "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
}
