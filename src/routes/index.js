import config from "../config";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";

// Public routes
export const publicRoutes = [
  { path: config.Routes.login, component: LoginPage },
  { path: config.Routes.home, component: HomePage },
];