import { Hero } from "../components/Hero";
import { Offers } from "../components/Offers";
import contents from "../../_shared/utils/data/contents";
import { Content } from "../components/Content";
import { heroData } from "../../_shared/utils/data/hero";
import { features } from "../../_shared/utils/data/features";
import Carousel from "../components/Carousel";
import { carousel } from "../../_shared/utils/data/carousel";
import CallUs from "../components/CallUs";
import Header from "../../header/screen/Header";
import Footer from "../../footer/screen/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero {...heroData} />
      <Offers {...features} />
      {contents?.map((content, index: number) => (
        <Content key={index} {...content} />
      ))}
      <Carousel {...carousel} />
      <CallUs />
      <Footer />
    </>
  );
};

export default Home;
