import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup $hideOnDesktop>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
          <DesktopCTA>
            <Button>
              Subscribe
            </Button>
            <Link href="#">Already a member?</Link>
          </DesktopCTA>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const Link = styled.a`
  color: var(--color-gray-900);
  font-family: 'Crimson Text', 'serif';
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px; 
  text-decoration: underline;
`

const DesktopCTA = styled.div`
  display: none;
  
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.desktopAndUp} {
    background: unset;
    position: absolute;
    width: 100%;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
  
  @media ${QUERIES.desktopAndUp} {
    color: var(--color-gray-900);
    display: ${p => p.$hideOnDesktop && 'none'}
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
