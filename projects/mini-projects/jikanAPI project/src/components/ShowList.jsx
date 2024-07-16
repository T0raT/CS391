import ShowInfo from "./ShowInfo.jsx";
import {useEffect, useState} from "react";
import styled from "styled-components";


export default function ShowList() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /*
  * Need to grab these fields from the API:
  * 1. Title
  * 2. Image
  * 3. Type
  * 4. Synopsis
  * */

  const SearchDiv = styled.div`
      display: flex;
      justify-content: center;
  `

  const handleSearchInput = () => {
    setLoading(true);
    setSearchQuery(document.getElementById("search-bar").value);
  }

  useEffect(() => {
    async function searchShow() {
      if (searchQuery === "" || searchQuery === null || searchQuery === undefined) {
        setLoading(true);
      } else {
        const jikanAPI = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
        const jikanData = await jikanAPI.json();
        await setShows(jikanData.data);
        setLoading(false);
        console.log(shows.length);
      }
    }
    searchShow().then(() => console.log("results fetched"))
        .catch(err => console.log("Error while fetching:",err));
  }, [searchQuery, loading]);


  return (
      <>
        <SearchDiv>
          <label form="search-bar"></label>
          <input id="search-bar"/>
          <button onClick={handleSearchInput}>Search!</button>
        </SearchDiv>
        {loading ? <div>Loading...</div>
            :
            shows.map(show => (
                  <ShowInfo key={show?.mal_id}
                    title={show?.title}
                    img={show?.images?.webp?.image_url}
                    type={show?.type}
                    synopsis={show?.synopsis}
                  />
            ))
        }
      </>
  )
}