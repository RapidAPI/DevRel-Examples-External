import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/gettitleDetails",
    params: { imdbid: req.query.id },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": "69ae23e117mshaa398c157f895bdp15c0a5jsnfcd183159b31",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      // res.status(500).json(error.response.data.payload);
      console.error(error);
    });
}
