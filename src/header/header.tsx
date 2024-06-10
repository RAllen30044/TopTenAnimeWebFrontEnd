import { useState } from "react";
import { UseAuthProvider } from "../authentication/authProvider";
import "./header.css";
import { Authentication } from "../authentication/authenticationPopUp";
import { AddAnimeForm } from "../AddAnimeForm/AddAnimeForm";
import { UseComponentProvider } from "../ComponentProvider";
export type yesNo = "yes" | "no";
export const Header = () => {
  const {
    token,
    viewAdminForm,
    setViewAdminForm,
    setToken,
    viewAddAnimeForm,
    setViewAddAnimeForm,
  } = UseAuthProvider();
  const [dropDown, setDropDown] = useState<yesNo>("no");
  const { setActiveComponent } = UseComponentProvider();
  return (
    <div id="completeHeader">
      <nav id="animeHeader">
        <div id="headerImgContainer">
          <img
            src="https://icon-library.com/images/anime-icon-png/anime-icon-png-5.jpg"
            id="luffyHeaderIcon"
            alt="Monkey D. Luffy"
            onClick={() => {
              setViewAdminForm("no");
              setViewAddAnimeForm("no");
              setActiveComponent("homePage");
            }}
          />
        </div>
        <h2 id="mobileHeaderTitle">Your Anime Top Ten list</h2>
        <div id="headerNavigationLinks">
          <h3
            id=""
            className={`headerLink homeLink`}
            onClick={() => {
              setViewAdminForm("no");
              setViewAddAnimeForm("no");
              setActiveComponent("homePage");
            }}
          >
            Home
          </h3>
          <h3
            className={`headerLink aboutLink`}
            onClick={() => {
              setActiveComponent("about");
              setViewAdminForm("no");
              setViewAddAnimeForm("no");
            }}
          >
            About
          </h3>
          <h3
            className={`headerLink contactLink`}
            onClick={() => {
              setActiveComponent("contact");
              setViewAdminForm("no");
              setViewAddAnimeForm("no");
            }}
          >
            Contact
          </h3>
          <div id="addAnimeContainer" className={`${token ? "" : "hidden"}`}>
            <h3
              className={`addAnime  headerLink`}
              onClick={() => {
                setViewAddAnimeForm(viewAddAnimeForm === "no" ? "yes" : "no");
              }}
            >
              Add Anime
            </h3>
            <AddAnimeForm />
          </div>
          {!token ? (
            <div id="authenticationContainer">
              <h3
                onClick={() => {
                  viewAdminForm === "no"
                    ? setViewAdminForm("yes")
                    : setViewAdminForm("no");
                }}
                className={`adminLink headerLink`}
              >
                Admin
              </h3>
              <Authentication />
            </div>
          ) : (
            <h3
              className={`headerLink logOutLink`}
              onClick={() => {
                setViewAddAnimeForm("no");
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
              id=""
              className={`headerLink homeLink`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              Home
            </h3>
            <h3
              className={`headerLink aboutLink`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              About
            </h3>
            <h3
              className={`headerLink contactLink`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              Contact
            </h3>

            <h3
              className={`headerLink addAnime${token ? "" : "hidden"}`}
              onClick={() => {
                setDropDown("no");
              }}
            >
              Add Anime
            </h3>
            {!token ? (
              <h3
                className={`headerLink adminLink`}
                onClick={() => {
                  setViewAdminForm("yes");
                  setDropDown("no");
                }}
              >
                Admin
              </h3>
            ) : (
              <h3
                className={`headerLink logOutLink`}
                onClick={() => {
                  setDropDown("no");
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
