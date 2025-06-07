import React from "react";
import Carousel from "./Carousel";
import TopCategories from "./Categories";
import Card from "./Card";
import BuildPc from "./BuildPc";
import Listing from "./Listing";
import StudentSpecial from "./StudentSpecial";
import Accessories from "./Accessories";
import Features from "./Features";
import EndSection from "./EndSection";
import TimerSection from "./TimeBox";

const Home = () => {
  const message = "You can dream it, We can do it.";
  const btn = "View Detail";
  const heading = "Student Special";
  const img = "/imgs/studentspecial.png";
  const text = `Student Deal – <br /> 20%  Off Laptops`;

  return (
    <div>
      <Carousel message={message} btn={btn} />
      <TopCategories />
      <Card />
      <BuildPc />
      <Listing />
      {/* <TimerSection/> */}
      <StudentSpecial heading={heading} img={img} text={text} reverse={false} textcolor={false}/>
      <Accessories />
      <Features />
      <EndSection />
    </div>
  );
};

export default Home;
