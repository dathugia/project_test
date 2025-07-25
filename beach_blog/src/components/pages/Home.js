import React from "react";
import FindDestination from "../common/FindDestination";
import DestinationSection from "../common/DestinationSection";
import OverViewSection from "../common/OverViewSection";
import BlogSection from "../common/BlogSection";
import FooterMarquee from "../common/FooterMarquee";

const Home = () => {
  return (
    <>
      <FindDestination />
      <DestinationSection />
      <OverViewSection />
      <BlogSection />
      <FooterMarquee />
    </>
  );
};

export default Home;
