import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MobileNavigation from "./component/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/movieoslice";


function App() {
  const dispatch=useDispatch();
  
  const fetchTrendingData=async()=>{
    try{
      const response=await axios.get("trending/all/week");
      dispatch(setBannerData(response.data.results))
      
    }catch(error){
      console.error("Error fetching trending data:", error);
    }
  }
  useEffect(()=>{
    fetchTrendingData();
  },[])
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
