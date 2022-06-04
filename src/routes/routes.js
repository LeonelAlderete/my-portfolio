//componentes
import Home from "../pages/Home";
import Error404 from "../components/Error404/Error404";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    component: Error404,
  },
];

export default routes;
