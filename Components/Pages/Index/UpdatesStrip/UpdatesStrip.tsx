import React from "react";
import UpdatesStripStyle from "./UpdatesStrip.module.scss";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  const UpdateTexts = [
    "Upcoming update - Collaborative profile with NFC card coming soon : )0",
    "Upcoming update - Collaborative profile with NFC card coming soon : )1",
    "Upcoming update - Collaborative profile with NFC card coming soon : )2",
  ];

  return (
    <div className={UpdatesStripStyle.UpdatesStrip}>
      <div className={UpdatesStripStyle.TiltedStrip}>&nbsp;</div>

      <Marquee className={UpdatesStripStyle.MainStrip} pauseOnHover={true}>
        {UpdateTexts.map((item) => (
          <>
            <span style={{ color: "black" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>{item}</span>
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroSection;
