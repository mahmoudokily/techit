/** @format */

import { PageLayout } from "../../_shared/layouts/PageLayout";
import { carousel } from "../../_shared/utils/data/carousel";
import contents from "../../_shared/utils/data/contents";
import { features } from "../../_shared/utils/data/features";
import { heroData } from "../../_shared/utils/data/hero";
import { servicesData } from "../../_shared/utils/data/services";
import Footer from "../../footer/screen/Footer";
import Header from "../../header/screen/Header";
import CallUs from "../components/CallUs";
import Carousel from "../components/Carousel";
import { Content } from "../components/Content";
import { Hero } from "../components/Hero";
import { Offers } from "../components/Offers";
import Services from "../components/Services";
const Home = () => {
  return (
    <>
      <Hero {...heroData} />
      <Services {...servicesData} />
      <Offers {...features} />
      {contents?.map((content, index: number) => (
        <Content key={index} {...content} />
      ))}
      <Carousel {...carousel} />
      <CallUs />
    </>
  );
};

export default Home;
