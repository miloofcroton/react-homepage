// core pages
import About from '../content/about';
import Home from '../content/home';

export const ROUTES = {
  ABOUT: {
    Component: About,
    path: '/about',
    linkTo: () => '/about',
    nav: true,
    order: 2,
    label: 'About',
  },
  HOME: {
    Component: Home,
    path: '/home',
    linkTo: () => '/home',
    default: true,
    nav: true,
    order: 1,
    label: 'Home',
  },
};
