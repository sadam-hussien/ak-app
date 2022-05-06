import {
  Home,
  Login,
  Register,
  PublicDatasets,
  Datasets,
  DatasetDetails,
} from "../pages";

export const routes = [
  { id: 1, path: "/", Component: Home, isProtected: true },
  { id: 2, path: "/login", Component: Login, isProtected: true },
  { id: 3, path: "/register", Component: Register, isProtected: true },
  { id: 4, path: "/datasets", Component: Datasets, isProtected: true },
  {
    id: 5,
    path: "/public-datasets",
    Component: PublicDatasets,
    isProtected: true,
  },
  {
    id: 6,
    path: "/datasets/:id",
    Component: DatasetDetails,
    isProtected: true,
  },
];
