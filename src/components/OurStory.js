import React from "react";
import "../CSS/OurStory.css";
import topBanner from "../assets/images/photos/our-story/about-us-top-banner.webp";
import missionImage from "../assets/images/photos/our-story/about-us-mission.webp";
import processImage from "../assets/images/photos/our-story/about-us-process.webp";
import visionImage from "../assets/images/photos/our-story/about-us-vision.webp";
import experienceImage from "../assets/images/photos/our-story/about-us-experience.jpg";

const OurStory = () => {
  return (
    <div className="about-us-page-container flex flex-col mb-12">
      <div className="about-us-top-banner w-full mt-11">
        <img src={topBanner} className="about-us-top-banner-image w-full object-cover" alt="about us top page banner" />
      </div>

      <div className="about-us-page-body w-full">
        <div className="about-us-mission flex flex-col justify-center items-center">
          <div className="mission-header w-1/2 text-center">
            “THE FELIX MISSION IS SIMPLE: TO PULL OUT ALL THE STOPS, EVERY TIME; TO TREAT GUESTS TO
            THE MOST THOUGHTFUL EXPERIENCE AND MOST SUPERB PRODUCT; AND TO REMAIN HUMBLE HOSTS IN
            THE PROCESS.”
          </div>
          <div className="mission-body w-1/2 text-center">
            Felix Roasting Co. represents the coming together of an eclectic team of visionaries who
            are not afraid to push the boundaries in their respective fields. By bringing our
            guiding pillars of design, hospitality, and product into harmony, our goal is to elevate
            what has become a timeworn routine for many. The Felix mission is simple: to pull out
            all the stops, every time; to treat guests to the most thoughtful experience and most
            superb product; and to remain humble hosts in the process. We like to think the Felix
            mission shines through each and every facet of our brand.
          </div>
          <img src={missionImage} className="mission-image" alt="mission glass of coffee" />
        </div>

        <div className="about-us-process flex flex-col justify-center items-center">
          <div className="process-header w-1/2 text-center">OUR PROCESS</div>
          <div className="process-body w-1/2 text-center">
            Our coffee selection process is aligned with how we curate the rest of the Felix
            experience: deliberately, and with only the best in mind. Following a strict buying
            calendar that is in sync with the harvest of each growing partner and estate, we select
            coffees that tell a story - coffees that speak to our olfactory senses and our
            imaginations. Felix coffees stand out in blind tastings, and they play a vital role in
            bringing the hard work of our producers into the spotlight. At the end of the day, the
            stories we are telling are really theirs. In terms of flavor, we seek coffees that are
            easy to share. The ones that make the cut have an obvious natural sweetness, as well as
            a mix of unique yet approachable flavor profiles.
          </div>
          <img src={processImage} className="process-image" alt="process cup of coffee" />
        </div>

        <div className="about-us-vision flex flex-col justify-center items-center">
          <div className="vision-header w-1/2 text-center">OUR VISION</div>
          <div className="vision-body w-1/2 text-center">
            As an innovative coffee shop and roasting company, our vision is to redefine the “coffee
            break” and to galvanize both the mind and the creative spirit by paying just as much
            attention to the design and experience as we do to the product. More importantly, we
            will share the stories that make each of our coffees so distinctive. After all, we’re
            not just roasters—we’re storytellers. Coffee contains more flavor components than wine,
            and every cup offers as complex a flavor journey as a glass of Bordeaux, if not more.
            Yet we often marginalize the role of coffee in our everyday lives. Our goal is to shift
            the current standard and bring fine coffee into the mainstream by putting the spotlight
            on each coffee’s terroir (pronounced TER-wahr). Terroir in translation: the combination
            of environmental factors such as climate, sunlight, and soil that gives each crop its
            unique taste and story. To bridge that gap between the current coffee paradigm and the
            vision we have for our guests, we offer our products in a way that is ultimately
            practical and accessible, but that encourages guests to take an extra minute to consider
            their daily routine.
          </div>
          <img src={visionImage} className="vision-image" alt="process shop interior" />
        </div>

        <div className="about-us-experience flex flex-col justify-center items-center">
          <div className="experience-header w-1/2 text-center">THE FELIX EXPERIENCE</div>
          <div className="experience-body w-1/2 text-center">
            The Felix experience is thoroughly timeless. Guests are greeted warmly; unique and
            delightful libations flow from behind the bar; and conversations drifting from the next
            table steal your attention. It is an environment of warmth and familiarity, coupled with
            intrigue and excitement. Behind the scenes, our baristas and hosts are busy at work. The
            techniques, tools, and ingredients they employ—many of which we developed—are designed
            to give us a consistently exceptional product. Our ability to curate a dynamic
            atmosphere and vibe is unparalleled. The drinks we serve at Felix are as much a part of
            our DNA as anything. From our house-made non-dairy milks to our proprietary syrups, and
            even our tonic water, we develop our recipes from scratch with the goal of pleasing a
            discerning crowd. Taking the extra step of creating our own thoughtful and high-quality
            recipes is part of the backbone of our unique experience.
          </div>
          <img src={experienceImage} className="experience-image" alt="process woman holding paper coffee cup" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
