import { useState } from "react";
import "./addAnimeForm.css";
import { UseAuthProvider } from "../authentication/authProvider";
import { postNewAnimeInfo } from "../apiFunctions";
import toast from "react-hot-toast";

export const AddAnimeForm = () => {
  const [title, setTitle] = useState<string>("");
  const [mediaType, setMediaType] = useState<string>("");
  const [pictureUrl, setPictureUrl] = useState<string>("");
  const { viewAddAnimeForm, setViewAddAnimeForm } = UseAuthProvider();

  return (
    <form
      method="POST"
      id="addAnimeForm"
      className={`${viewAddAnimeForm === "no" ? "hidden" : ""}`}
      onSubmit={async (e) => {
        e.preventDefault();
        const addAnimeInfo = await postNewAnimeInfo({
          title: title,
          mediaType: mediaType,
          pictureUrl: pictureUrl,
        });

        console.log(addAnimeInfo);
        if (!addAnimeInfo) {
          toast.error("Anime information has not been saved");
          return;
        }
        toast.success("Anime information has been saved");
        setViewAddAnimeForm("no");
        return addAnimeInfo;
      }}
    >
      <div id="addAnimeFormInputContainer">
        <h3>Enter Missing Anime Information</h3>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="mediaType">Media Type</label>
        <input
          id="mediaType"
          type="text"
          name="mediaType"
          placeholder="TV, OVA, Movie..."
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
        />
        <label htmlFor="pictureUrl">Picture web address</label>
        <input
          id="pictureUrl"
          type="text"
          name="pictureUrl"
          placeholder="Picture Url"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
        />
        <div className="buttonContainer">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
