import React from 'react';
import { Container } from 'reactstrap';
import NavBar from '../layout/Navbar';
import Footer from '../layout/Footer';

const AppLayout = ({ children, ...props }) => (
  <div className="wrapper">
    <div className="main-panel">
      <NavBar {...props} brandText="ToDos" />
      <div className="content">
        <Container fluid>{children}</Container>
      </div>
      <Footer fluid />
    </div>
  </div>
);

export default AppLayout;
