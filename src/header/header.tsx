import { useState } from "react";
import { UseAuthProvider } from "../authentication/authProvider";
import "./header.css";
import { Authentication } from "../authentication/authenticationPopUp";
export type yesNo = "yes" | "no";
export const Header = () => {
  const { token, viewAdminForm, setViewAdminForm, setToken } =
    UseAuthProvider();
  const [dropDown, setDropDown] = useState<yesNo>("no");
  return (
    <div id="completeHeader">
      <nav id="animeHeader">
        <div id="headerImgContainer">
          <img
            src="https://icon-library.com/images/anime-icon-png/anime-icon-png-5.jpg"
            id="luffyHeaderIcon"
            alt="Monkey D. Luffy"
          />
        </div>
        <h2 id="mobileHeaderTitle">Your Anime Top Ten list</h2>
        <div id="headerNavigationLinks">
          <h3 id="homeLink" className={`headerLink`}>
            Home
          </h3>
          <h3 id="aboutLink" className={`headerLink`}>
            About
          </h3>
          <h3 id="contactLink" className={`headerLink`}>
            Contact
          </h3>
          <h3 id={`addAnime`} className={`headerLink ${token ? "" : "hidden"}`}>
            Add Anime
          </h3>

          {!token ? (
            <div id="authenticationContainer">
              <h3
                id="adminLink"
                onClick={() => {
                  viewAdminForm === "no"
                    ? setViewAdminForm("yes")
                    : setViewAdminForm("no");
                }}
                className={`headerLink`}
              >
                Admin
              </h3>
              <Authentication />
            </div>
          ) : (
            <h3
              id="logOutLink"
              className={`headerLink `}
              onClick={() => {
                localStorage.clear();
                setToken(null);
              }}
            >
              LogOut
            </h3>
          )}
        </div>
        <div id="mobileDropdown">
          <i
            className={`fa-solid fa-bars `}
            onClick={() => {
              setDropDown(dropDown === "no" ? "yes" : "no");
            }}
          ></i>
          <div
            id="mobileDropdownBox"
            className={`${dropDown === "no" ? "hidden" : ""}`}
          >
            <h3
              id="homeLink"
              className={`headerLink`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              Home
            </h3>
            <h3
              id="aboutLink"
              className={`headerLink`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              About
            </h3>
            <h3
              id="contactLink"
              className={`headerLink`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              Contact
            </h3>

            <h3
              id={`addAnime`}
              className={`headerLink ${token ? "" : "hidden"}`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              Add Anime
            </h3>
            {!token ? (
              <h3
                id="adminLink"
                className={`headerLink `}
                onClick={() => {
                  setViewAdminForm("yes");
                  setDropDown("no");
                }}
              >
                Admin
              </h3>
            ) : (
              <h3
                id="logOutLink"
                className={`headerLink `}
                onClick={() => {
                  localStorage.clear();
                  setToken(null);
                }}
              >
                LogOut
              </h3>
            )}
          </div>
        </div>
      </nav>
      <div id="customBorder"></div>
    </div>
  );
};
