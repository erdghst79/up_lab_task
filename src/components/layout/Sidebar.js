import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from 'reactstrap';
import routePaths, { routePatterns } from 'router/route-paths';
import logo from 'assets/images/logo-white-mini.svg';
import CategoryDataService from 'services/CategoryDataService';
import cn from 'classnames';
import useLiveData from 'hooks/common/useLiveData';
import c from './Sidebar.module.scss';

const navItems = [
  {
    path: routePaths.home,
    icon: <i className="tim-icons icon-components" />,
    title: 'All',
  },
];

const useLiveCategories = () => {
  return useLiveData({
    getData: CategoryDataService.getAll,
    listen: CategoryDataService.listenChanges,
  });
};

function Sidebar() {
  const categories = useLiveCategories();
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className={cn('sidebar-wrapper', c.sidebarWrapper)}>
        <div className="logo">
          <Link className="simple-text logo-mini" to={routePaths.home}>
            <div className="logo-img">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <span className="simple-text logo-normal">Categories</span>
        </div>
        <Nav className={c.nav}>
          {navItems.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path} className="nav-link" activeClassName="active"
                activeStyle={{
                 fontWeight: "bold"
                                       }}>
                {route.icon}
                {route.title}
              </NavLink>
            </li>
          ))}
          {categories.map((category) => (
            <li key={category._id}>
              <NavLink

                to={routePatterns.category.stringify({ categoryId: category._id })}
                className="nav-link"
                activeClassName="active"
                      activeStyle={{
                           fontWeight: "bold"
                         }}
              >
                <i className={category.iconClass || 'tim-icons icon-tag'} />
                {category.title}
              </NavLink>
            </li>
          ))}
        </Nav>
        <Nav className={c.bottomNav}>
          <li>
            <ReactstrapNavLink
              onClick={async () => {
                const category = await CategoryDataService.insert({ title: 'Untitled' });
                const path = routePatterns.category.stringify({ categoryId: category._id });
                history.push(path);
              }}
            >
              <i className="tim-icons icon-simple-add" />
              <p>Add category</p>
            </ReactstrapNavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
