import axios from "axios";

export default function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
    params: { distance: req.query.distance, vehicle: req.query.vehicle },
    headers: {
      "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
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
