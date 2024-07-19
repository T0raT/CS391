import ShowInfo from "./ShowInfo.jsx";
import {useEffect, useState} from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
      
    @media screen and (max-width: 1150px) {
        grid-template-columns: 1fr;
    }
  `


export default function ShowList() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  /*
  * Need to grab these fields from the API:
  * 1. Image
  * 2. Title
  * 3. Year
  * 4. Season
  * 5. Status (Upcoming, airing, completed)
  * 6. Show Type (e.g. tv, ova, movie, etc...)
  * 7. Rating
  * -----------
  * Back side: Synopsis
  * */

  useEffect(() => {
    async function searchShow() {
        const jikanAPI = await fetch(`https://api.jikan.moe/v4/anime?q=Gundam&order_by=popularity`);
        const jikanData = await jikanAPI.json();
        await setShows(jikanData.data);
        setLoading(false);
    }

    searchShow().then(() => console.log("results fetched"))
        .catch(err => console.log("Error while fetching:",err));
  }, [loading]);


  return (
      <>
        <ListContainer>
          {loading ? <div>Loading...</div>
              :

              shows.map(show => (
                  <ShowInfo key={show?.mal_id}
                            img={show?.images?.webp?.image_url}
                            title={show?.title}
                            status={show?.status}
                            type={show?.type}
                            year={show?.year}
                            season={show?.season}
                            score={show?.score}
                            synopsis={show?.synopsis}
                  />
              ))
          }
        </ListContainer>
      </>
  )
}