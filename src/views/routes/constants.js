// core pages
import About from '../content/about';
import Home from '../content/home';

export const ROUTES = {
  ABOUT: {
    path: '/about',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home',
    Component: Home,
    linkTo: () => '/home'
  },
};

export const LINKS = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' }
];
