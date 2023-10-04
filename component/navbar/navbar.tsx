import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { useRouter } from 'next/router';

const MainNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <Navbar>
      <div className="navStyle" data-aos="fade-down">
        <div data-aos="fade-right">
          <Navbar.Brand href="/">RSUITE</Navbar.Brand>
          <Nav>
            <Nav.Item
              icon={<HomeIcon />}
              onClick={() => {
                router.push('/');
              }}
            >
              Home
            </Nav.Item>
          </Nav>
        </div>
        <div data-aos="fade-left">
          <Nav pullRight>
            <Nav.Item
              icon={<CogIcon />}
              onClick={() => {
                router.push('/admin');
              }}
            >
              Admin
            </Nav.Item>
          </Nav>
          <Nav >
            <Nav.Item
              icon={<CogIcon />}
              onClick={() => {
                router.push('/manageChair');
              }}
            >
              จัดการที่นั่ง
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default MainNavbar;
