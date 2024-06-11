import { useEffect, useState } from "react";
import "./topTenList.css";
import { AnimeInfoType } from "../apiFunctions";
import toast from "react-hot-toast";

export const TopTenList = () => {
  const getFavorites = localStorage.getItem("favorites");
  const getTopTen = localStorage.getItem("topTen");

  const [allAnime, setAllAnime] = useState<AnimeInfoType[]>([]);
  const [animeList, setAnimeList] = useState<AnimeInfoType[]>([]);
  const [favoriteAnime, setFavoriteAnime] = useState<AnimeInfoType[]>(
    getFavorites ? JSON.parse(getFavorites) : []
  );
  const [topTenAnime, setTopTenAnime] = useState<AnimeInfoType[]>(
    getTopTen ? JSON.parse(getTopTen) : []
  );

  const characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("");

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch("http://localhost:3000/anime");
      const data = await response.json();
      setAllAnime(data);
      setAnimeList(data);
    };
    fetchAnime();
  }, []);

  return (
    <div id="yourAnimeTopTenList">
      <div id="sortContainer">
        <h1>Find Anime in Anime List</h1>
        <input
          type="text"
          id="animeSort"
          placeholder="Anime Name"
          onChange={(e) => {
            setAnimeList(
              allAnime.filter((anime) => {
                return anime.title
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              })
            );
          }}
        />
      </div>
      <div id="animeList">
        <div className="sectionContainer" id="allAnimeContainer">
          <h1>Anime List</h1>
          <div className="lettersContainer">
            {characters.map((char, index) => (
              <h2
                key={index}
                className="letters"
                onClick={() => {
                  setAnimeList(
                    allAnime.filter((anime) => {
                      return anime.title.split("")[0] === char;
                    })
                  );
                }}
              >
                {char}
              </h2>
            ))}
          </div>

          <section className="listContainer" id="allAnime">
            {animeList.map((anime, index) => (
              <div className="cardContainer" key={index}>
                <div
                  id={`card${index}`}
                  className={`card ${index % 2 === 0 ? "even" : "odd"}`}
                >
                  <h3 className="title">Title: {anime.title}</h3>
                  <h3 className="mediaType">Media: {anime.mediaType}</h3>
                  <div className="pictureContainer">
                    <img src={anime.pictureUrl} alt="pictureName" />
                  </div>
                  <div className="buttonContainer">
                    <button
                      onClick={() => {
                        if (favoriteAnime.length === 50) {
                          toast.error(
                            "Favorites list is full. Please remove anime from the favorites list if you which to add another anime."
                          );
                          return;
                        }
                        if (
                          favoriteAnime.some(
                            (favoriteAnime) =>
                              favoriteAnime.title === anime.title
                          )
                        ) {
                          toast.error(
                            `${anime.title} is already on the favorites list`
                          );
                          return;
                        }
                        setFavoriteAnime([...favoriteAnime, anime]);
                        localStorage.setItem(
                          "favorites",
                          JSON.stringify([...favoriteAnime, anime])
                        );
                      }}
                    >
                      Add to Favorites
                    </button>
                    <button
                      onClick={() => {
                        if (
                          favoriteAnime.some(
                            (favoriteAnime) =>
                              favoriteAnime.title === anime.title
                          )
                        ) {
                          toast.error(
                            `${anime.title} is already on the favorites list`
                          );
                          return;
                        }
                        if (topTenAnime.length === 10) {
                          toast.error(
                            "Top Ten list is full. Please remove anime from Top tens list if you which to add another anime."
                          );
                          return;
                        }
                        setFavoriteAnime([...favoriteAnime, anime]);
                        localStorage.setItem(
                          "favorites",
                          JSON.stringify([...favoriteAnime, anime])
                        );
                        setTopTenAnime([...topTenAnime, anime]);
                        localStorage.setItem(
                          "topTen",
                          JSON.stringify([...topTenAnime, anime])
                        );
                      }}
                    >
                      Add to Top Ten
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="sectionContainer">
          <h1>Favorites</h1>
          <section className="listContainer" id="favoriteAnime">
            {favoriteAnime.map((anime, index) => (
              <div
                id={`card${index}`}
                key={index}
                className={`card ${index % 2 === 0 ? "even" : "odd"}`}
              >
                <h3 className="title">Title: {anime.title}</h3>
                <h3 className="mediaType">Media: {anime.mediaType}</h3>
                <div className="pictureContainer">
                  <img src={anime.pictureUrl} alt="pictureName" />
                </div>
                <div className="buttonContainer">
                  <button
                    onClick={() => {
                      if (
                        topTenAnime.some(
                          (favoriteAnime) => favoriteAnime.title === anime.title
                        )
                      ) {
                        toast.error(
                          `${anime.title} is already on the Top Ten's list`
                        );
                        return;
                      }
                      if (topTenAnime.length === 10) {
                        toast.error(
                          "Top Ten list is full. Please remove anime from Top tens list if you which to add another anime."
                        );
                        return;
                      }
                      setTopTenAnime([...topTenAnime, anime]);
                      localStorage.setItem(
                        "topTen",
                        JSON.stringify([...topTenAnime, anime])
                      );
                    }}
                  >
                    Add to Top Ten
                  </button>
                  <button
                    onClick={() => {
                      setFavoriteAnime(
                        favoriteAnime.filter(
                          (favoriteAnime) => favoriteAnime !== anime
                        )
                      );

                      localStorage.setItem(
                        "favorites",
                        JSON.stringify(
                          favoriteAnime.filter(
                            (favoriteAnime) => favoriteAnime !== anime
                          )
                        )
                      );

                      setTopTenAnime(
                        topTenAnime.filter(
                          (topTenAnime) => topTenAnime !== anime
                        )
                      );

                      localStorage.setItem(
                        "topTen",
                        JSON.stringify(
                          topTenAnime.filter(
                            (topTenAnime) => topTenAnime !== anime
                          )
                        )
                      );
                    }}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="sectionContainer">
          <h1>Top Ten Anime</h1>

          <section className="listContainer" id="topTenAnime">
            {topTenAnime.map((anime, index) => (
              <div className="cardContainer" key={index}>
                <div className="number">
                  <h3>#{index + 1}</h3>
                </div>
                <div
                  id={`card${index}`}
                  className={`card ${index % 2 === 0 ? "even" : "odd"}`}
                >
                  <h3 className="title">Title: {anime.title}</h3>
                  <h3 className="mediaType">Media: {anime.mediaType}</h3>
                  <div className="pictureContainer">
                    <img src={anime.pictureUrl} alt="pictureName" />
                  </div>
                  <div className="buttonContainer">
                    <button
                      onClick={() => {
                        setTopTenAnime(
                          topTenAnime.filter(
                            (topTenAnime) => topTenAnime !== anime
                          )
                        );
                        localStorage.setItem(
                          "topTen",
                          JSON.stringify(
                            topTenAnime.filter(
                              (topTenAnime) => topTenAnime !== anime
                            )
                          )
                        );
                      }}
                    >
                      {" "}
                      Remove from Top Ten
                    </button>
                    <button
                      disabled={index === 0 ? true : false}
                      style={
                        index === 0
                          ? { background: "lightgrey" }
                          : { background: "" }
                      }
                      onClick={() => {
                        const filteredAnime = topTenAnime.filter(
                          (myAnimeList) => myAnimeList !== anime
                        );

                        filteredAnime.splice(index - 1, 0, anime);

                        setTopTenAnime(filteredAnime);
                        localStorage.setItem(
                          "topTen",
                          JSON.stringify(filteredAnime)
                        );
                      }}
                    >
                      {" "}
                      Move Up Top Ten List
                    </button>
                    <button
                      disabled={index === topTenAnime.length - 1 ? true : false}
                      style={
                        index === 9 || index === topTenAnime.length - 1
                          ? { background: "lightgrey" }
                          : { background: "" }
                      }
                      onClick={() => {
                        const filteredAnime = topTenAnime.filter(
                          (myAnimeList) => myAnimeList !== anime
                        );

                        filteredAnime.splice(index + 1, 0, anime);

                        setTopTenAnime(filteredAnime);
                        localStorage.setItem(
                          "topTen",
                          JSON.stringify(filteredAnime)
                        );
                      }}
                    >
                      {" "}
                      Move Down Top Ten List
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
