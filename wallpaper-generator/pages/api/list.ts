// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://thefluentme.p.rapidapi.com/generate-post",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "thefluentme.p.rapidapi.com",
      },
      data: '{"post_title":"Suggest a list with 30 items that contains any word that describes a wallpaper","ai_model":"advanced_01","post_min_length":"199","post_max_length":"500"}',
    };

    try {
      const response = await axios.request(options);

      const suggestions: string[] = [];

      response.data.ai_post.split(" ").map((word: string) => {
        if (!word.match(/[\d.]+/)) {
          suggestions.push(word);
        }
      });

      res.status(200).json( suggestions);
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }
}
