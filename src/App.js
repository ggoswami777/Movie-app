import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MobileNavigation from "./component/MobileNavigation";

function App() {
  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>

      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
