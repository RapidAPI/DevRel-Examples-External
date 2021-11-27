import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://football-web-pages1.p.rapidapi.com/league-table.json",
    params: { comp: req.query.leagueID },
    headers: {
      "x-rapidapi-host": "football-web-pages1.p.rapidapi.com",
      "x-rapidapi-key": "3ca279c6c3msh74f8c7183d90cd8p1e42d5jsn07f3a9318ff2",
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
