import Navbar from "./components/Navbar";
import PromoSlider from "./components/PromoSlider";
import PromoCarousel from "./components/PromoCarousel";
import VideoEmbed from "./components/VideoEmbed";
import InstaBox from "./components/InstaBox";
import Footer from "./components/Footer"; 

export default function Home() {
  return (
    <div>
      <Navbar />
      <PromoSlider />
      <PromoCarousel />
      <VideoEmbed />
      <InstaBox />
      <Footer />   
    </div>
  );
}
