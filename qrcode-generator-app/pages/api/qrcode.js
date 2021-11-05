import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://qrcodeutils.p.rapidapi.com/qrcodefree",
      params: {
        text: req.query.input,
        validate: "true",
        size: "150",
        type: "svg",
        level: "M",
      },
      headers: {
        "x-rapidapi-host": "qrcodeutils.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
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
  } else {
    res.status(400);
  }
}
