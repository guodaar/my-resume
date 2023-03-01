import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import Contact from "../pages/Contact/Contact";

export const HOME_PATH = "/";
export const PROJECTS_PATH = "/portfolio";
export const PROJECT_PATH = "/portfolio/:id";
export const CONTACT_PATH = "/contact";

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PROJECTS_PATH,
      Component: Projects,
    },
    {
      path: PROJECT_PATH,
      Component: ProjectPage,
    },
    {
      path: CONTACT_PATH,
      Component: Contact,
    },
  ],
};
