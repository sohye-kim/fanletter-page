import logo from './img/logo.svg';
import secondwind from './img/secondwind.jpg';
import styled from 'styled-components';
import React from 'react';

const HeadereForm = styled.header`
  width: 20rem;
  height: 100vh;
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
  width: 10rem;
  height: 10rem;
  border: 8px solid rgb(206, 83, 85);
  margin: 8rem 5rem 5px 4rem;
`;

const App = () => {
  return (
    <>
      <HeadereForm>
        <Logo src={logo} alt="secondwind bss logo"></Logo>
        <SubTitle>Fan letter Page</SubTitle>
        <AlbumImg src={secondwind}></AlbumImg>
      </HeadereForm>
    </>
  );
};

export default App;