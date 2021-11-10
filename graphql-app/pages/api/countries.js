import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "POST",
    url: "https://geodb-cities-graphql.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
    data: {
      query: `query getCountry($prefix: String!){
        countries(namePrefix: $prefix) {
          edges {
            node {
              name
              capital
              flagImageUri
              currencyCodes
            }
          }
        }
      }`,
      variables: {
        prefix: req.query.countryName,
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
}
