import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://hashtagy-generate-hashtags.p.rapidapi.com/v1/custom_1/tags",
    params: { keyword: req.query.keyword },
    headers: {
      "x-rapidapi-host": "hashtagy-generate-hashtags.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}
