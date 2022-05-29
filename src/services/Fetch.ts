import { BASE_URL } from "../utils/Constants";
import client from "../utils/Api";
import { TRENDING } from "../utils/QueryString";
import { parseTrending } from "../utils/Parser";

export const getTrending = async (url: string = BASE_URL) => {
  const response = await client.post(BASE_URL, { query: TRENDING });
  const result = parseTrending(response.data.data.Page.media);
  return result;
};
