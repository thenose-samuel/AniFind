import { IonContent, IonImg, IonThumbnail } from "@ionic/react";
import { useEffect, useState } from "react";
import "../components/HomeCarousel.css";
import { getTrending } from "../services/Fetch";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

type TrendingAnime = {
  id: number;
  imgLow: string;
  imgMed: string;
  imgHi: string;
  titleEng: string;
  titleRomanji: string;
};

let data: TrendingAnime[] = [];

const HomeCarousel: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTrending().then((value: TrendingAnime[]) => {
      data = value;
      setLoading(false);
      console.log("data: " + data[0].imgHi);
    });
  }, []);

  return (
    <IonContent className="carousel">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className="swiper"
        autoplay={true}
      >
        {data.map((anime: TrendingAnime) => (
          <SwiperSlide>
            <IonThumbnail className="carousel-image-container">
              <IonImg
                src={!loading ? anime.imgHi : ""}
                className="carousel-image"
              ></IonImg>
            </IonThumbnail>
          </SwiperSlide>
        ))}
      </Swiper>
      <IonContent className="filter">Hello</IonContent>
    </IonContent>
  );
};

export default HomeCarousel;
