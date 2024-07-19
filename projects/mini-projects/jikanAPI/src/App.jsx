import './App.css'
import ShowList from "./components/ShowList.jsx";
import styled from "styled-components";

const BackgroundImg = styled.div `
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-position: center;
      background-image: url("monogatari.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: auto;
      filter: blur(3px);
      z-index: -1;
  `

const Note = styled.h1 `
    color: Black;
    text-align: center;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`


function App() {

  return (
    <>
      <BackgroundImg></BackgroundImg>

      <Note>Click on cards to check synopsis.</Note>

      <form>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <ShowList/>
    </>
  )
}

export default App
