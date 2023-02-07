// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { description } = req.body;

    const options = {
      prompt: `Generate a wallpaper like ${description}`,
      n: 1,
      size: "1024x1024",
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        options,
        config
      );

      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }
}
