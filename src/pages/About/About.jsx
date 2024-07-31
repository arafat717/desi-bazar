import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import WhyChoseUsSection from "../WhyChoseUsSection/WhyChoseUsSection";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Online Bazar - About</title>
      </Helmet>
      <Cover page="About Us"></Cover>
      <WhyChoseUsSection></WhyChoseUsSection>
    </div>
  );
};

export default About;
