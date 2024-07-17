import styled from "styled-components";
import {useState} from "react";


const ShowCard = styled.div`
    margin-top: 25px;
    display: flex;
    background: rgba(26, 26, 26, 0.5);
    height: 20rem;
    width: 30rem;
    border-radius: 16px;
    color: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;

    img {
        max-width: 100%;
        border-radius: 16px 0 0 16px;
        object-fit: cover;
        display: inline-block;
    }

    #main-info-container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        box-shadow: 15px 15px 37px 0 rgba(0, 0, 0, 0.4) inset;
        border-radius: 0 16px 16px 0;
    }

    #main-front,
    #main-back {
        backface-visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        line-height: 1.5;
    }

    #main-front {
        transition: transform 0.8s;
        transform: ${(props) => (props.flip ? "rotateY(180deg)" : "rotateY(0)")};
        z-index: ${(props) => (props.flip ? `-1` : `1`)};
        overflow: ${(props) => (props.flip ? `hidden` : `scroll`)};
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    #main-front::-webkit-scrollbar {
        display: none;
    }

    h3 {
        margin-bottom: 1rem;
        text-align: center;
    }

    #misc-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    #main-back {
        transform: ${(props) => (props.flip ? "rotateY(0)" : "rotateY(-180deg)")};
        transition: transform 0.8s;
        z-index: ${(props) => (props.flip ? 1 : -1)};
        overflow: ${(props) => (props.flip ? `scroll` : `auto`)};
        scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0);
        scrollbar-width: initial;
    }
`

export default function ShowInfo(show) {
  const [flip, setFlip] = useState(false);

  return (
      <ShowCard key={show?.mal_id} onClick={() => setFlip(!flip)}
        flip={flip}
      >
        <img src={show?.img} alt={show?.title} />
        <div id="main-info-container">
          <div id="main-front">
            <h3>{show?.title}</h3>
            <div id="misc-info">
              <h5>{show?.year === null ? "Year: N/A" : show?.year}</h5>
              <h5>{show?.season === null ? "Season: N/A" : show?.season} </h5>
            </div>
            <div id="misc-info">
              <h5>{show?.status === null ? "N/A" : show?.status}</h5>
              <h5>{show?.type === null ? "N/A" : show?.type} </h5>
            </div>
            <div id="misc-info">
              <h5>{show?.score === null ? "Score: N/A" : show?.score}</h5>
            </div>
          </div>
          <div id="main-back">
            <p>{show?.synopsis}</p>
          </div>
        </div>
      </ShowCard>
  )
}