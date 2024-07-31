import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import WhyChoseUsSection from "../WhyChoseUsSection/WhyChoseUsSection";
import KnowMoreSection from "../KnowMoreSection/KnowMoreSection";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Online Bazar - About</title>
      </Helmet>
      <Cover page="About Us"></Cover>
      <WhyChoseUsSection></WhyChoseUsSection>
      <KnowMoreSection></KnowMoreSection>
    </div>
  );
};

export default About;
