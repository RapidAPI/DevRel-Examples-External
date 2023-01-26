// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { company, brandColors, description } = req.body;

    const allBrandColors = brandColors.join(", ");

    /* `Create a logo of ${company} with brand colors ${allBrandColors} and description: ${description}` */
    const options = {
      prompt: 'Create a logo. Company name is Rapid API. Brand colors are #00ff00, #0000ff, #ff0000. Description: "Rapid API is a platform for developers to discover, test, and integrate APIs into their applications."',
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

      console.log(response);
      res.status(200).json(response.data);
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }
}
