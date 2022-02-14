import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://genius-song-lyrics1.p.rapidapi.com/search",
    params: { q: req.query.title, per_page: "10", page: "1" },
    headers: {
      "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
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
