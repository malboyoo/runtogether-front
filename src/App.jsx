import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="h-[100vh] bg-test  flex flex-col bg-gray-3">
      <AuthProvider>
        <Header />
        <div className="flex-auto text-white">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
