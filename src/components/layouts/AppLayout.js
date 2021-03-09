import React from 'react';
import { Container } from 'reactstrap';
import { Navbar, Footer } from 'components';

const AppLayout = ({ children, ...props }) => (
  <div className="wrapper">
    <div className="main-panel">
      <Navbar {...props} brandText="ToDos" />
      <div className="content">
        <Container fluid>{children}</Container>
      </div>
      <Footer fluid />
    </div>
  </div>
);

export default AppLayout;
