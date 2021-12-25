import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/gettitleDetails",
    params: { imdbid: req.query.id },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": NEXT_PUBLIC_RAPIDAPI_KEY,
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
}
