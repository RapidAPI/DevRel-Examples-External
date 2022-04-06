import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: `https://hapi-books.p.rapidapi.com/search/${req.query.title}`,
    headers: {
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      "X-RapidAPI-Key": NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}
