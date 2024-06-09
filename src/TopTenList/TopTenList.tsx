import { useEffect, useState } from "react";
import "./topTenList.css";
import { AnimeInfoType } from "../apiFunctions";

export const TopTenList = () => {
  const [allAnime, setAllAnime] = useState<AnimeInfoType[]>([]);
  const [favoriteAnime, setFavoriteAnime] = useState<AnimeInfoType[]>([]);
  const [topTenAnime, setTopTenAnime] = useState<AnimeInfoType[]>([]);

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
      <div className="sectionContainer">
        <h1>Anime List</h1>
        <section className="listContainer" id="allAnime">
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
      </div>
      <div className="sectionContainer">
        <h1>Favorites</h1>
        <section className="listContainer" id="favoriteAnime">
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
      </div>
      <div className="sectionContainer">
        <h1>Top Ten Anime</h1>

        <section className="listContainer" id="topTenAnime">
          {allAnime.map((anime, index) => (
            <div id={`card${index}`} key={index} className="card">
              <h3 className="title">Title: {anime.title}</h3>
              <h3 className="mediaType">Media: {anime.mediaType}</h3>
              <div className="pictureContainer">
                <img src={anime.pictureUrl} alt="pictureName" />
              </div>
              <div className="buttonContainer">
                <button> Remove from Top Ten</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
