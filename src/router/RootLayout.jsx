import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { Suspense } from "react";
import PageLoader from "@/components/loaders/PageLoader";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/utils/provider/authProvider";
const RootLayout = () => {
  const { token, clearToken } = useAuth();

  return (
    <>
      <main className="flex flex-col min-h-screen justify-between font-sans ">
        <Header />
        <div className="flex">
          {token && <Sidebar />}
          <Suspense fallback={<PageLoader />}>
            <div className="flex-1">
              <Outlet />
            </div>
          </Suspense>
        </div>
        <Footer />
      </main>
      <Toaster richColors />
    </>
  );
};

export default RootLayout;
