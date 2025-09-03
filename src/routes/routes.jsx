import { createBrowserRouter } from "react-router-dom";

// Layout
import DashboardLayout from "../layouts/DashboardLayout";

// Auth Pages
import SignInPage from "../pages/auth/SignInPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OTPVerification from "../pages/auth/OTPVerification";
import ResetPassword from "../pages/auth/ResetPassword";

// Dashboard Pages
import DashboardOverview from "../pages/dashboardpages/DashboardOverview/DashboardOverview";

// Profile/Settings Pages
import Profile from "../pages/dashboardpages/personalinformation/Profile";
import EditProfile from "../pages/dashboardpages/personalinformation/Editprofile";
import TermsAndConditions from "../pages/dashboardpages/terms/TermsAndConditions";
import EditTermsAndConditions from "../pages/dashboardpages/terms/EditTermsAndConditions";
import PrivacyPolicy from "../pages/dashboardpages/privacypolicy/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/dashboardpages/privacypolicy/EditPrivacyPolicy";
import AboutUs from "../pages/dashboardpages/about/AboutUs";
import EditAbout from "../pages/dashboardpages/about/EditAbout";

// Notification Pages
import AllNotifications from "../pages/dashboardpages/notification/AllNotifications";

// User Pages (keeping the existing one, but might need to be renamed to Tenants)
import AllUsers from "../pages/dashboardpages/user/AllUsers";

// TODO: Create these new page components to match your Rentalvate structure
// import TenantsPage from "../pages/dashboardpages/tenants/TenantsPage";
// import LandlordPage from "../pages/dashboardpages/landlord/LandlordPage";
// import ContractorPage from "../pages/dashboardpages/contractor/ContractorPage";
// import WalletPage from "../pages/dashboardpages/wallet/WalletPage";

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
      { path: "tenants", element: <AllUsers /> }, // Using existing AllUsers component for now
      // { path: "tenants", element: <TenantsPage /> }, // Uncomment when you create the component
      // { path: "landlord", element: <LandlordPage /> }, // Uncomment when you create the component
      // { path: "contractor", element: <ContractorPage /> }, // Uncomment when you create the component
      // { path: "wallet", element: <WalletPage /> }, // Uncomment when you create the component

      // Legacy route (keeping for backward compatibility)
      { path: "users", element: <AllUsers /> },

      // Notifications
      { path: "notifications", element: <AllNotifications /> },
      { path: "notificatons", element: <AllNotifications /> }, // Keep typo for backward compatibility

      // Settings Routes
      { path: "settings/profile", element: <Profile /> },
      { path: "settings/editpersonal", element: <EditProfile /> },
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