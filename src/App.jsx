import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-[100vh] bg-gray-4 flex flex-col">
      <Header />
      <div className="flex-auto bg-gray-2 text-gray-4">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
