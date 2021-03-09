/* 
  This is an example context for Sidebar toggle state
  Use context when you need some props being passed from top to bottom through many components that do not use this prop
*/

import React from 'react';

const useSidebarState = () => {
  const [sidebarOpen, setSidebar] = React.useState(useSidebarState.defaults.sidebarOpen);
  const toggleSidebar = React.useCallback((v) => setSidebar(typeof v === 'boolean' ? v : (s) => !s), []);
  return { sidebarOpen, toggleSidebar };
};
useSidebarState.defaults = {
  sidebarOpen: false,
  toggleSidebar: () => {},
};

export const SidebarContext = React.createContext({
  ...useSidebarState.defaults,
});

export const SidebarContextProvider = ({ children, ...value }) => {
  const sidebarState = useSidebarState();
  return <SidebarContext.Provider value={{ ...value, ...sidebarState }}>{children}</SidebarContext.Provider>;
};

export const SidebarContextConsumer = SidebarContext.Consumer;

export const useSidebarContext = () => React.useContext(SidebarContext);
