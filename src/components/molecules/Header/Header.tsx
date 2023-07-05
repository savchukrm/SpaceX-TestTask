import React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/Logo/Logo';
import { Icon } from '../../atoms/Icon/Icon';
import NavButton from '../../atoms/NavButton/NavButton';
import { SignInButton } from '../../atoms/Button/Button';

// @ts-ignore
import heartIcon from '../../../assets/images/heart.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />

      <Navbar>
        <NavButton title="home" />
        <NavButton title="tours" />
        <NavButton title="about" />
        <NavButton title="help" />
      </Navbar>

      <ActionsContainer>
        <Icon imgUrl={heartIcon} act={undefined} />
        <SignInButton text="Sign In" />
      </ActionsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 13px 80px;
  background: rgba(30, 30, 30, 0.48);
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 26px;
`;

export default Header;
