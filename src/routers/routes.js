import { Home, Login, Register } from "../pages";

export const routes = [
  { id: 1, path: "/", Component: Home, isProtected: true },
  { id: 2, path: "/login", Component: Login, isProtected: true },
  { id: 3, path: "/register", Component: Register, isProtected: true },
];
