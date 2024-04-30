import routePath from "./routePath";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@/utils/provider/authProvider";
import RootLayout from "./RootLayout";
import ErrorPage from "@/pages/error-page"; // any imports below should be imported lazyily

/* Auth Page Imports */
const LoginPage = lazy(() => import("@/pages/auth/login"));

/* Public Page Imports */
const AboutPage = lazy(() => import("@/pages/public/about"));

/* Private Page Imports */
const DashBoardPage = lazy(() => import("@/pages/private/dashboard"));
const UserManagementPage = lazy(() =>
  import("@/pages/private/user-management")
);
const GuestManagementPage = lazy(() =>
  import("@/pages/private/guest-management")
);
const GuestPage = lazy(()=>import("@/pages/private/guest-management/guest"))

const FeedbackManagementPage = lazy(()=>import("@/pages/private/feedback-management"))
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
          path: routePath.userManagement,
          element: <UserManagementPage />,
        },
        {
          path: routePath.guestManagement,
          children: [
            {
              index: true,
              element: <GuestManagementPage />,
            },
            {
              path:":id",
              element:<GuestPage/>
            }
          ],
        },
        {
          path: routePath.feedbackManagement,
          element: <FeedbackManagementPage />,
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
