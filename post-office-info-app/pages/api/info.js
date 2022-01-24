import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "POST",
      url: "https://pincode.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "pincode.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: { searchBy: "pincode", value: req.query.pinCode },
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
