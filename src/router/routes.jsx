import routePath from "./routePath";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@/utils/provider/authProvider";
import RootLayout from "./RootLayout";
import ErrorPage from "@/pages/error-page";

/* Auth Page Imports */
const LoginPage = lazy(() => import("@/pages/auth/login"));

/* Public Page Imports */
const AboutPage = lazy(() => import("@/pages/public/about"));
const DashBoardPage = lazy(() => import("@/pages/private/dashboard"));
const UserManagementPage = lazy(() =>
  import("@/pages/private/user-management")
);

/* Private Page Imports */
const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      children: [
        {
          path: routePath.about,
          element: <AboutPage />,
        },
      ],
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          index: true,
          element: <DashBoardPage />,
        },
        {
          path:routePath.userManagement,
          element: <UserManagementPage />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: routePath.login,
      element: <LoginPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RootLayout />,
      children: [
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
      ],
    },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
