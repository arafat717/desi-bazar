import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import WhyChoseUsSection from "../WhyChoseUsSection/WhyChoseUsSection";
import KnowMoreSection from "../KnowMoreSection/KnowMoreSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import VideoSection from "../../components/VideoSection/VideoSection";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Online Bazar - About</title>
      </Helmet>
      <Cover page="About Us"></Cover>
      <div className="max-w-[1400px] mx-auto">
        <WhyChoseUsSection></WhyChoseUsSection>
        <KnowMoreSection></KnowMoreSection>
      </div>
      <VideoSection></VideoSection>
      <div className="max-w-[1400px] mx-auto">
        <BlogSection></BlogSection>
      </div>
    </div>
  );
};

export default About;
