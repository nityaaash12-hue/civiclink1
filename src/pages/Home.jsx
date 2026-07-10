import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import ReportCard from "../components/ReportCard";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import AIReport from "../components/AIReport";
import RecentReports from "../components/RecentReports";
import WhyCivic from "../components/WhyCivic";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
     <HowItWorks />
     <AIReport />
      <Categories />
      <RecentReports/>
      <WhyCivic/>
      <ReportCard />
      <Footer />
    </>
  );
}

export default Home;