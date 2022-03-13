import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, SearchResult } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResult[] | ApiError>
) {
  const { term } = req.query;

  if (!term) {
    return res
      .status(200)
      .json({ status: 400, message: "Missing Search Term" });
  }

  try {
    const response = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${term as string}`
    );
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Error calling external Weather API" });
  }
}
