import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://football-web-pages1.p.rapidapi.com/league-table.json",
    params: { comp: req.query.leagueID },
    headers: {
      "x-rapidapi-host": "football-web-pages1.p.rapidapi.com",
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
