import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./components/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="h-[100vh] flex flex-col appContainer">
      <AuthProvider>
        <Header />
        <div className="flex-auto text-white bg-gray-3">
          <Suspense
            fallback={
              <div className="mt-96 w-full flex justify-center">
                <i className="fa-solid fa-spinner animate-spin text-5xl"></i>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
