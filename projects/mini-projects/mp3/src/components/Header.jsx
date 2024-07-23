import { Link as RouterLink } from 'react-router-dom';
import styled from "styled-components";

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    
    nav {
        margin-bottom: 10px;
    }
    nav .App-link {
        margin-right: 10px;
    }
    

    .App-logo {
        height: 60px;
        pointer-events: none;
    }
    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`

function Header({ logo }) {
  return (
    <AppHeader logo={logo} >
      <img src={logo} className='App-logo' alt='logo' />
      <h1>My Portfolio</h1>
      <nav>
        <RouterLink to='' className='App-link'>
          About me
        </RouterLink>
        <RouterLink to='projects' className='App-link'>
          Projects
        </RouterLink>
      </nav>
    </AppHeader>
  );
}

export default Header;
