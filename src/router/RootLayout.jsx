import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { Suspense } from "react";
import PageLoader from "@/components/loaders/PageLoader";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
const RootLayout = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-between font-sans ">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <div className="flex-1 p-4 md:px-10 lg:px-20 md:py-8">
            <Outlet />
          </div>
        </Suspense>
        <Footer />
      </main>
      <Toaster richColors />
    </>
  );
};

export default RootLayout;
