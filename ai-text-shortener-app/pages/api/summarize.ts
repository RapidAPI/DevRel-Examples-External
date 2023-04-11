import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  summary: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY
          ? process.env.RAPID_API_KEY
          : "",
        "X-RapidAPI-Host": process.env.RAPID_API_HOST
          ? process.env.RAPID_API_HOST
          : "",
      },
      body: JSON.stringify(req.body),
    };

    try {
      const response = await fetch(
        `https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/`,
        options
      );
      const json = await response.json();

      res.status(200).json({
        summary: json.summary,
      });
    } catch (error) {
      res.status(500).json({ summary: "Error" });
    }
  } else {
    res.status(500).json({ summary: "Error" });
  }
}
