import { useState } from "react";
import "./contact.css";
import toast from "react-hot-toast";
import { sendEmail } from "../apiFunctions";

export const Contact = () => {
  const [title1, setTitle1] = useState("");
  const [mediaType1, setMediaType1] = useState("");
  const [title2, setTitle2] = useState("");
  const [mediaType2, setMediaType2] = useState("");
  const [title3, setTitle3] = useState("");
  const [mediaType3, setMediaType3] = useState("");
  const [title4, setTitle4] = useState("");
  const [mediaType4, setMediaType4] = useState("");
  const [title5, setTitle5] = useState("");
  const [mediaType5, setMediaType5] = useState("");
  const [title6, setTitle6] = useState("");
  const [mediaType6, setMediaType6] = useState("");

  return (
    <div id="contact">
      <h1>Anime Suggestions</h1>
      <form
        action="post"
        className="contactForm"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            title1 === "" &&
            title2 === "" &&
            title3 === "" &&
            title4 === "" &&
            title5 === "" &&
            mediaType6 === "" &&
            title6 === "" &&
            mediaType1 === "" &&
            mediaType2 === "" &&
            mediaType3 === "" &&
            mediaType4 === "" &&
            mediaType5 === ""
          ) {
            toast.error("Please fill out at least one field");
            return;
          }
          sendEmail({
            title1: title1,
            mediaType1: mediaType1,
            title2: title2,
            mediaType2: mediaType2,
            title3: title3,
            mediaType3: mediaType3,
            title4: title4,
            mediaType4: mediaType4,
            title5: title5,
            mediaType5: mediaType5,
            title6: title6,
            mediaType6: mediaType6,
          });
          if (!sendEmail) {
            toast.error("check array");
            return;
          }
          toast.success("Email sent");
          setMediaType1("");
          setMediaType2("");
          setMediaType3("");
          setMediaType4("");
          setMediaType5("");
          setTitle6("");
          setMediaType6("");
          setTitle1("");
          setTitle2("");
          setTitle3("");
          setTitle4("");
          setTitle5("");
        }}
      >
        <div className="contactContainer">
          <div id="leftForm">
            <label htmlFor="title1">Anime title</label>
            <input
              type="text"
              className="animeInfoInput"
              value={title1}
              onChange={(e) => {
                setTitle1(e.target.value);
              }}
            />

            <label htmlFor="mediaType">Media</label>
            <input
              type="text"
              className="animeInfoInput"
              value={mediaType1}
              onChange={(e) => {
                setMediaType1(e.target.value);
              }}
            />
            <label htmlFor="title1">Anime title</label>
            <input
              type="text"
              className="animeInfoInput"
              value={title2}
              onChange={(e) => {
                setTitle2(e.target.value);
              }}
            />

            <label htmlFor="mediaType">Media</label>
            <input
              type="text"
              className="animeInfoInput"
              value={mediaType2}
              onChange={(e) => {
                setMediaType2(e.target.value);
              }}
            />
            <label htmlFor="title1">Anime title</label>
            <input
              type="text"
              className="animeInfoInput"
              value={title3}
              onChange={(e) => {
                setTitle3(e.target.value);
              }}
            />

            <label htmlFor="mediaType">Media</label>
            <input
              type="text"
              className="animeInfoInput"
              value={mediaType3}
              onChange={(e) => {
                setMediaType3(e.target.value);
              }}
            />
          </div>
          <div id="rightSide">
            <label htmlFor="title4">Anime title</label>
            <input
              type="text"
              className="animeInfoInput"
              value={title4}
              onChange={(e) => {
                setTitle4(e.target.value);
              }}
            />

            <label htmlFor="mediaType">Media</label>
            <input
              type="text"
              className="animeInfoInput"
              value={mediaType4}
              onChange={(e) => {
                setMediaType4(e.target.value);
              }}
            />
            <label htmlFor="title1">Anime title</label>
            <input
              type="text"
              className="animeInfoInput"
              value={title5}
              onChange={(e) => {
                setTitle5(e.target.value);
              }}
            />

            <label htmlFor="mediaType">Media</label>
            <input
              type="text"
              className="animeInfoInput"
              value={mediaType5}
              onChange={(e) => {
                setMediaType5(e.target.value);
              }}
            />
            <label htmlFor="title1">Anime title</label>
            <input
              type="text"
              className="animeInfoInput"
              value={title6}
              onChange={(e) => {
                setTitle6(e.target.value);
              }}
            />

            <label htmlFor="mediaType">Media</label>
            <input
              type="text"
              className="animeInfoInput"
              value={mediaType6}
              onChange={(e) => {
                setMediaType6(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button type="submit" id="cont">
            Submit
          </button>
        </div>
      </form>
      <div id="contactInfo">
        <h1>Contact Info</h1>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:YourTopTenAnime@outlook.com">
            YourTopTenAnime@outlook.com{" "}
          </a>
        </p>
      </div>
    </div>
  );
};
