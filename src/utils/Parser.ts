import { NOTFOUND } from "dns";
import internal from "stream";

type TrendingAnime = {
  id: number;
  imgLow: string;
  imgMed: string;
  imgHi: string;
  titleEng: string;
  titleRomanji: string;
};

export const parseTrending = (response: any) => {
  let data: TrendingAnime[] = [];

  response.forEach((anime: any) => {
    let element: TrendingAnime = {
      id: anime.id,
      imgHi: anime.coverImage.extraLarge,
      imgLow: anime.coverImage.large,
      imgMed: anime.coverImage.medium,
      titleEng: anime.title.english,
      titleRomanji: anime.title.romanji,
    };
    data.push(element);
  });
  return data;
};

export default parseTrending;
