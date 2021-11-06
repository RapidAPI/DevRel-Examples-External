import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    var options = {
      method: "POST",
      url: "https://jspell-checker.p.rapidapi.com/check",
      headers: {
        "x-rapidapi-host": "jspell-checker.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
      data: {
        language: "enUS",
        fieldvalues: req.body.content,
        config: {
          forceUpperCase: false,
          ignoreIrregularCaps: false,
          ignoreFirstCaps: true,
          ignoreNumbers: true,
          ignoreUpper: false,
          ignoreDouble: false,
          ignoreWordsWithNumbers: true,
        },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
        res.status(response.status);
      });
  } else {
    res.status(400);
  }
}
