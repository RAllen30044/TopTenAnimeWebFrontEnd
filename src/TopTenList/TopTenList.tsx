import { useEffect, useState } from "react";
import "./topTenList.css";
import { AnimeInfoType } from "../apiFunctions";

export const TopTenList = () => {
  const [allAnime, setAllAnime] = useState<AnimeInfoType[]>([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch("http://localhost:3000/someAnime");
      const data = await response.json();
      setAllAnime(data);
    };
    fetchAnime();
  }, []);

  return (
    <div id="animeList">
      <section id="allAnime">
        {allAnime.map((anime, index) => (
          <div id={`card${index}`} key={index} className="card">
            <h3 className="title">Title: {anime.title}</h3>
            <h3 className="mediaType">Media: {anime.mediaType}</h3>
            <div className="pictureContainer">
              <img src={anime.pictureUrl} alt="pictureName" />
            </div>
            <div className="buttonContainer">
              <button> Add to Favorites</button>
            </div>
          </div>
        ))}
      </section>
      <section id="favoriteAnime"></section>
      <section id="topTenAnime"></section>
    </div>
  );
};
