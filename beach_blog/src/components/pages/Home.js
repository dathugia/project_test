import DestinationSection from "../common/DestinationSection";
import FooterMarquee from "../common/FooterMarquee";
import Welcome from "../common/Welcome";
import useLenis from "../../hooks/useLenis";
import FixedBackground from "../common/FixedBackground";
import ImageGallery from "../common/ImageGallery";

const Home = () => {
  useLenis();

  return (
    <>
      <FixedBackground />
        <Welcome />
        <ImageGallery />
        <DestinationSection />
        <FooterMarquee />
    </>
  );
};

export default Home;
