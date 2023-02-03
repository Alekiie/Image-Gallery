import React, { useState, useEffect } from "react";
import "./components.css";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const searchImages = async (e) => {
    e.preventDefault();

  
  };
  useEffect( () => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
        {
          headers: {
            Authorization:
              "x0RPamKQVBvJF4lLpQY4KiU0GxaFzx6qYzdBen6yTe3osGruaKPgLak",
          },
        }
      );
      setPhotos(response.data.photos)
    };
    fetchPhotos()
  },[query]);

  return (
    <div className="search">
      <form onSubmit={searchImages}>
        <input
          type="text"
          placeholder="I.e Bird"
          id="search"
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" id="btn" className="searchbtn">
          {" "}
          Search
        </button>
      </form>
      <div>
        {photos.map(photo=>(
            <img 
                key={photo.id}
                src={photo.src.medium}
                alt= {photo.photographer}
            />
        ))}
      </div>
    </div>
  );
}

export default Search;
