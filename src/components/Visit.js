import React from "react";
import "../CSS/Visit.css";
import visitHeaderImage from "../assets/images/photos/visit/visit-header.webp";
import nomadImage from "../assets/images/photos/slide-photo1.webp";
import aspenImage from "../assets/images/photos/slide-photo5.webp";
import nohoImage from "../assets/images/photos/location-noho.webp";
import westSohoImage from "../assets/images/photos/location-west-soho.webp";

const Visit = () => {
  return (
    <div className="visit-page-wrapper">
      <div className="visit-page-header">
        <img
          src={visitHeaderImage}
          className="w-full h-full object-cover"
          alt="visit page header"
        />
        <h1 className="header-visit-text absolute right-0 text-4xl bg-transparent top-80 mr-20">
          Visit
        </h1>
      </div>
      <div className="visit-page-body flex flex-col outline">
        <div className="location-nomad flex items-center justify-between">
          <div className="location-details">
            <div className="location-address">450 PARK AVE S</div>
            <div className="location-name">NOMAD NYC</div>
            <div className="location-open-times">Open Everyday 8am-5pm</div>
            <div className="location-description">
              Our flagship was established in 2018 as a gathering place for those seeking to relax,
              socialize, and feel inspired. Drawing its soul from the aesthetic movement of the late
              19th century, our Park Avenue South hideaway is as much an immersive exhibition as it
              is a coffee shop. From our hand-drawn mural—made up of 500 individual tiles—to our set
              of take-away cups that perfectly match our bespoke patterned terrazzo floor, each
              detail is meant to pull our guests one level deeper into our universe. The surprise
              and delight of discovering art all around only adds to the already exciting journey of
              visiting and imbibing with us.
            </div>
          </div>
          <div className="location-image">
            <img src={nomadImage} />
          </div>
        </div>

        <div className="location-noho flex items-center justify-between">
        <div className="location-image">
            <img src={nohoImage} />
          </div>
          <div className="location-details">
            <div className="location-address">2 ASTOR PL</div>
            <div className="location-name">NOHO NYC</div>
            <div className="location-open-times">Open Everyday 8am-3pm</div>
            <div className="location-description">
              Marble Calcutta and Alpi Verde diamond floor is an ode to classical old world design
              with Felix signature copper leafed Wainscott, tables, and banquettes. The walls and
              ceilings are adorned with 5000 hand designed tiles featuring our arabica flower motif
              and complimentary images. The fixtures were also custom made-two dramatic bar lamps
              with Venetian feathered glass and a matching center chandelier over a center console.
            </div>
          </div>
        </div>

        <div className="location-aspen flex items-center justify-between">
          <div className="location-details w-1/2">
            <div className="location-address">103 S. MILL ST</div>
            <div className="location-name">ASPEN, CO</div>
            <div className="location-open-times">Open Everday 7am-2pm</div>
            <div className="location-description">
              Located at the historic Hotel Jerome, our Aspen outpost brings the best of Felix to
              the Rockies, serving their signature hot and cold beverages, delicate bites and an
              extensive menu of specialty drinks, each meticulously infused with Felix’s house-made
              non-dairy milks, proprietary syrups and tonics, and custom spice blends.
            </div>
          </div>
          <div className="location-image">
            <img src={aspenImage} />
          </div>
        </div>

        <div className="location-west-soho flex items-center justify-between">
        <div className="location-image">
            <img src={westSohoImage} />
          </div>
          <div className="location-details">
            <div className="location-address">525 GREENWICH ST</div>
            <div className="location-name">WEST SOHO</div>
            <div className="location-open-times">Open Everyday 7am</div>
            <div className="location-description">
              Located within the award winning Hotel Hugo in West Soho, Felix Roasting Co. is
              offering a unique expanded concept including breakfast, lunch, dinner, and a full bar
              program. Decorated with imported italian mahogany, venetian glass, and custom
              wallpaper, this is the perfect location to enjoy meeting up with friends or working
              remotely.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
