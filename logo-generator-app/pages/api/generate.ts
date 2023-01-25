// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const options = {
      prompt: 'Generate a logo for a company called "Acme"',
      n: 2,
      size: "1024x1024",
    };

    axios.interceptors.request.use((config) => {
      config.headers["Content-Type"] = "application/json";
      config.headers["Authorization"] = "Bearer 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";
      return config;
    });

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        options
      );

      console.log(response);
      res.status(200).json({ name: "John Doe" });
    } catch (err) {
      console.log(err);
    }
  }
}
