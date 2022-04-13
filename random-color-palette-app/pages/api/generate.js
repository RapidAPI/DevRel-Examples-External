import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/1/4",
    headers: {
      "X-RapidAPI-Host": "random-palette-generator.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}
