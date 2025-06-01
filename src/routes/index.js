import CategoryPost from "../components/caption/CategoryPost";
import GetInspired from "../components/inspried/Inspried";
import config from "../config";
import CaptionPage from "../pages/caption/CaptionPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage";

// Public routes
export const publicRoutes = [
  { path: config.Routes.login, component: LoginPage },
  { path: config.Routes.home, component: HomePage },
  { path: config.Routes.caption, component: CaptionPage },
  { path: config.Routes.fb, component: CategoryPost },
  { path: config.Routes.inspried, component: GetInspired },
  { path: config.Routes.profile, component: ProfilePage },
];