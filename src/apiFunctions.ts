import { baseURL } from "./App";

type tokenInfoType = {
  token: string;
  usernameInformation: {
    username: string;
  };
};
export type AnimeInfoType = {
  title: string;
  pictureUrl: string;
  mediaType: string;
};
// export const baseUrl: string = "http://localhost:3000";

export const authorization = (
  username: string,
  password: string
): Promise<tokenInfoType> =>
  fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      userName: username,
      password: password,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to login");
      }

      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });

export const postNewAnimeInfo = (animeObj: object): Promise<AnimeInfoType> =>
  fetch(`${baseURL}/anime`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(animeObj),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to create anime");
      }
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

export const sendEmail = (anime: object) =>
  fetch(`${baseURL}/sendEmail`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(anime),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to send email");
      }
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

// export getAllAnime
