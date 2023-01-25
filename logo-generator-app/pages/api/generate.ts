// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { brandColors, description } = req.body;

    const allBrandColors = brandColors.join(", ");

    const options = {
      prompt: `Generate a logo in PNG for a company whose brand colors are ${allBrandColors} and whose description is ${description}`,
      n: 1,
      size: "1024x1024",
    };
    console.log(options);


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

      console.log(response);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }
}
