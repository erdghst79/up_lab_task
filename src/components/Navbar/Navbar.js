import React, { Fragment } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// reactstrap components
import { NavbarBrand, Navbar, Container } from 'reactstrap';

class NewNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: 'navbar-transparent',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateColor);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateColor);
  }

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    const { collapseOpen } = this.state;
    if (window.innerWidth < 993 && collapseOpen) {
      this.setState({
        color: 'bg-white',
      });
    } else {
      this.setState({
        color: 'navbar-transparent',
      });
    }
  };

  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    const { collapseOpen } = this.state;
    if (collapseOpen) {
      this.setState({
        color: 'navbar-transparent',
      });
    } else {
      this.setState({
        color: 'bg-white',
      });
    }
    this.setState({
      collapseOpen: !collapseOpen,
    });
  };

  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState((s) => ({
      modalSearch: !s.modalSearch,
    }));
  };

  render() {
    const { brandText } = this.props;
    const { color } = this.state;
    return (
      <>
        <Navbar className={classNames('navbar-absolute', color)}>
          <Container fluid style={{ minHeight: '40px' }}>
            <NavbarBrand href="#">{brandText}</NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NewNavbar;
