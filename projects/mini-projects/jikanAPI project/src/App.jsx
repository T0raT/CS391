import './App.css'
import ShowList from "./components/ShowList.jsx";
import styled from "styled-components";


function App() {

  const AppContainer = styled.div `
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
  `

  return (
    <>
      <AppContainer>
        <ShowList/>
      </AppContainer>
    </>
  )
}

export default App
