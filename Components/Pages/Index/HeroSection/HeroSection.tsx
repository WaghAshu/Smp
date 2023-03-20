import React from "react";
import HeroSectionStyle from "./HeroSection.module.scss";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={`${HeroSectionStyle.HeroSection} container`}>
      <div className={HeroSectionStyle.GridSection1}>
        <div className={HeroSectionStyle.HeroSectionHeading}>
          The Collaboration platform you all Needed
        </div>
        <div className={HeroSectionStyle.HeroSectionDescription}>
          Join The waitlist and be the part of great revolution in the field of
          collaboration at web3 industry. Join The waitlist and be the part of
          great revolution in the field of collaboration at web3 industry.{" "}
        </div>
        <div className={HeroSectionStyle.HeroSectionInput}>
          <div>
            <input type="text" name="" id="" placeholder="Join Wait List" />
          </div>
          <div>
            <button>
              <img src="/Arrow.svg" alt="Submit" />
            </button>
          </div>
        </div>
      </div>
      <div className={HeroSectionStyle.GridSection2}>
        <img src="/HeroSectionImage.svg" alt="Hero Section Image" />
      </div>
    </div>
  );
};

export default HeroSection;
