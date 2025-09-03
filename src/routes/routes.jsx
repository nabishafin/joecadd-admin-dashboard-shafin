import { createBrowserRouter } from "react-router-dom";

// Layout
import DashboardLayout from "../layouts/DashboardLayout";

// Auth Pages
import SignInPage from "../pages/auth/SignInPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OTPVerification from "../pages/auth/OTPVerification";
import ResetPassword from "../pages/auth/ResetPassword";

// Dashboard Pages

// Profile/Settings Pages
import Profile from "../pages/dashboardpages/personalinformation/Profile";

import TermsAndConditions from "../pages/dashboardpages/terms/TermsAndConditions";
import EditTermsAndConditions from "../pages/dashboardpages/terms/EditTermsAndConditions";
import PrivacyPolicy from "../pages/dashboardpages/privacypolicy/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/dashboardpages/privacypolicy/EditPrivacyPolicy";
import AboutUs from "../pages/dashboardpages/about/AboutUs";
import EditAbout from "../pages/dashboardpages/about/EditAbout";

// Notification Pages
import AllNotifications from "../pages/dashboardpages/notification/AllNotifications";

import AllUsers from "../pages/dashboardpages/user/AllUsers";
import Managers from "../pages/dashboardpages/managers/Managers";
import Contractor from "@/pages/dashboardpages/Contractor/Contractor";
import Wallet from "@/pages/dashboardpages/wallet/Wallet";
import ChangedPassword from "@/pages/auth/Changepassword";
import DashboardOverview from "@/pages/dashboardpages/DashboardOverview/DashboardOverview";
import EditProfile from "@/pages/dashboardpages/personalinformation/EditProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPassword />,
  },
  {
    path: "/otpverification",
    element: <OTPVerification />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardOverview /> },

      // Main Navigation Routes (based on your Rentalvate sidebar)
      { path: "tenants", element: <AllUsers /> },
      { path: "managers", element: <Managers /> },
      { path: "contractor", element: <Contractor /> },
      { path: "wallet", element: <Wallet /> },

      // Legacy route (keeping for backward compatibility)
      { path: "users", element: <AllUsers /> },

      // Notifications
      { path: "notifications", element: <AllNotifications /> },

      // Settings Routes
      { path: "settings/profile", element: <Profile /> },
      { path: "settings/editpersonal", element: <EditProfile /> },
      { path: "settings/changepassword", element: <ChangedPassword /> },
      { path: "settings/terms", element: <TermsAndConditions /> },
      { path: "settings/editterms", element: <EditTermsAndConditions /> },
      { path: "settings/privacy", element: <PrivacyPolicy /> },
      { path: "settings/editprivacy", element: <EditPrivacyPolicy /> },
      { path: "settings/about", element: <AboutUs /> },
      { path: "settings/editabout", element: <EditAbout /> },
    ],
  },
]);

export default routes;
