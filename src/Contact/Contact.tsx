import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me</h1>
      <form
        action=""
        method="post"
        onSubmit={(e) => {
          e.preventDefault();

          alert("Your message has been sent");
        }}
      >
        <label htmlFor="title1">Title 1</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 2</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 3</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 4</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 5</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 6</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 7</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 8</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 9</label>
        <input type="text" className="animeInfoInput" />
        <label htmlFor="title1">Title 10</label>
        <input type="text" className="animeInfoInput" />
      </form>
    </div>
  );
};
