import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, WeatherResult } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResult | ApiError>
) {
  const { placeId } = req.query;
  if (!placeId) {
    return res.status(200).json({ status: 400, message: "Missing Place ID" });
  }

  try {
    const response = await fetch(
      `https://www.metaweather.com/api/location/${placeId}/`
    );
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Error calling external Weather API" });
  }
}
