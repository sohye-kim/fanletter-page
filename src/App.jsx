import logo from './assets/logo.svg';
import secondwind from './assets/secondwind.jpg';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';


const BodyContainer = styled.div`
  background-color: rgb(206, 83, 85);
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const HeadereForm = styled.header`
  height: 200px;
  background-color: rgb(28, 53, 93);
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
`;

const SubTitle = styled.h2`
  color: white;
  display: inline;
`;

const AlbumImg = styled.img`
  position: absolute;
  left: 85%;
  top: 13%;
  width: 10rem;
  height: 10rem;
  border: 8px solid rgb(206, 83, 85);
`;

const App = () => {
  return (
    <BodyContainer>
      <HeadereForm>
        <Logo src={logo} alt="secondwind bss logo" />
        <SubTitle>Fan letter Page</SubTitle>
        <ul>
          <li>부</li>
          <li>석</li>
          <li>순</li>
        </ul>
      </HeadereForm>
      <AlbumImg src={secondwind} alt="secondwind image" />
    </BodyContainer>
  );
};

export default App;