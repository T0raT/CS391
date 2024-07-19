import './Link.css';
import styled from "styled-components";


const AppLinkAnchor = styled.a`
    color: #61dafb;
`

function Link({ url, title }) {
  return (
    <AppLinkAnchor
      className='App-link'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </AppLinkAnchor>
  );
}

export default Link;
