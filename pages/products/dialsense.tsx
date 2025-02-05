import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/layout/Footer";
import Head from "next/head";
import { FeatureCard } from "../../components/screens/products/FeatureCard";
import { dhwaniFeaturesBig, dialsenseFeaturesBig } from "../../shared/staticData";
import { PlayButton } from "../../components/SVGs";
import { SiGooglemeet } from "react-icons/si";
import { SiMicrosoftteams } from "react-icons/si";
import { TiSocialSkype } from "react-icons/ti";
import { FaSlack } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { ZoomSVG } from "../../components/SVGs";
// import { Pricing } from "../../components/screens/products-dhwani/Pricing";
import ReactPlayer from "react-player";
import { dhwaniContents, dialsenseContents } from "../../shared/contents";
import { prefix } from "../../shared/constants";

interface Props {}

const DialSensePage: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>DialSense | Dynopii | New way to interact with consumers.</title>
      </Head>
      <Header />
      <section className="dhwani-page-bg min-h-screen">
        <div className="mx-auto xl:px-30" style={{ maxWidth: "1200px" }}>
          {/* <h1 className="text-h3 font-semibold text-white mx-auto md:text-center pt-140 mb-180 lg:mb-0 lg:py-90 md:py-80">
            {dialsenseContents.title}
          </h1> */}

          {/* Dhwani Introduction Section */}
          <div className="flex items-center justify-center flex-col py-40 pt-140">
            <img src={prefix + "/svgs/dialSense.svg"} alt="logo" width={203} height={203} />
            <h2
              className="text-h2 sm:text-h3 text-white font-semibold mb-35 text-center"
              dangerouslySetInnerHTML={{ __html: dialsenseContents.introductionSection.titleHTML }}
            ></h2>
            <h4 className="text-h4 sm:text-h5 text-gray-f2f font-semibold w-8/12 sm:w-11/12 text-center">
              {dialsenseContents.introductionSection.subtitle}
            </h4>
          </div>

          {/* Dhwani Features Section */}
          <div className="pt-40">
            <h3 className="text-h3 sm:text-h4 text-gray-e0e font-semibold mb-50 mt-70 text-center">
              {dialsenseContents.featuresSection.title}
            </h3>
            <div className="grid-feature-container" style={{ gridGap: 40 }}>
              {dialsenseFeaturesBig.map((feature) => (
                <FeatureCard size="large" key={feature.id} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div
          id="dhwani-demo"
          className="min-h-screen flex items-center justify-center relative xl:px-30"
          style={{
            // background: `linear-gradient(180deg, #222222 0%, #000000 29.5%, #000000 75.33%, #222222 100%)`,
            background: `#060606`,
          }}
        >
          <ReactPlayer
            width="110vh"
            height="70vh"
            className="video-player"
            controls
            light="/images/dhwani-demo.png"
            url="/videos/dhwani-demo.mp4"
            playIcon={<PlayButton />}
          />
        </div>

        <div className="mx-auto xl:px-30" style={{ maxWidth: "1200px" }}>
          {/* Integrated with tools section */}
          <div className="py-90">
            <h3 className="text-gray-e0e text-h3 sm:text-h4 text-center font-semibold mb-70">
              {dialsenseContents.ourCustomers.title}
            </h3>
            <div className="flex items-center justify-between flex-wrap max-w-xl mx-auto">
              <SiGooglemeet fill={"#ffffff"} className="w-20 h-20 xs:w-16 xs:h-16" />
              <SiMicrosoftteams fill={"#ffffff"} className="w-20 h-20 xs:w-16 xs:h-16" />
              <TiSocialSkype fill={"#ffffff"} className="w-20 h-20 xs:w-16 xs:h-16" />
            </div>
            <div className="flex items-center justify-between flex-wrap max-w-xl mx-auto mt-50">
              <ZoomSVG className="w-20 h-20 xs:w-16 xs:h-16" />
              <FaSlack fill={"#ffffff"} className="w-20 h-20 xs:w-16 xs:h-16" />
              <FaDiscord fill={"#ffffff"} className="w-20 h-20 xs:w-16 xs:h-16" />
            </div>
          </div>

          {/* Focus on Your Sales Section */}
          <div className="min-h-screen sm:min-h-1/4 md:min-h-1/2 sm:py-50 flex justify-center flex-col">
            <h1 className="text-h1 font-semibold sm:font-medium text-gray-f2f mb-70 sm:mb-40 md:text-h3">
              {dialsenseContents.focusOnSalesSection.title}
            </h1>
            <h3 className="text-h3 font-light text-gray-e0e md:text-h4">
              {dialsenseContents.focusOnSalesSection.description}
            </h3>
          </div>

          {/* Pricing */}
          {/* <Pricing /> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DialSensePage;
