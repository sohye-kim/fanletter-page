import logo from './logo.svg';
import styled from 'styled-components';
import React from 'react';

const HeaderForm = styled.header`
  background-color: rgb(28, 53, 93);
  height: 250px;
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
`;

const SubTitle = styled.h2`
  color: white;
  display: inline;
`;

const App = () => {
  return (
    <>
      <HeaderForm>
        <Logo src={logo} alt="secondwind bss logo"></Logo>
        <SubTitle>Fan letter Page</SubTitle>
      </HeaderForm>
    </>
  );
};

export default App;