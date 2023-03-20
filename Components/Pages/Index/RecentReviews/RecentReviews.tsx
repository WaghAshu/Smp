import React, { useEffect, useRef } from "react";
import RecentReviewsStyle from "./RecentReviews.module.scss";
import Marquee from "react-fast-marquee";

const ArrayRandomElement = (array: any[]) => {
  const temp = array[Math.floor(Math.random() * array.length)];
  return temp;
};

type ReviewCardProps = {
  profilepic: string;
  name: string;
  username: string;
  walletAddress: string;
  description: string;
};

const ReviewCard = (props: ReviewCardProps) => {
  const temp = ArrayRandomElement([
    "#fde5c8",
    "#d2f7fb",
    "#f9ffce",
    "#dde5f8",
    "#8eebf5",
  ]);

  return (
    <div
      className={`${RecentReviewsStyle.ReviewCard}`}
      style={{ backgroundColor: temp }}
    >
      <div
        className={RecentReviewsStyle.ReviewCardEmoji}
        style={{ backgroundColor: temp }}
      >
        {ArrayRandomElement(["🐝", "😄", "📨", "👌"])}
      </div>
      <div className={RecentReviewsStyle.ReviewCardDescription}>
        {props.description}
      </div>
      <div className={RecentReviewsStyle.ReviewCardProfile}>
        <img
          className={RecentReviewsStyle.ReviewCardProfilePic}
          src={props.profilepic}
          alt="Profile Pic"
        />
        <div className="ReviewCardProfileNameUsername">
          <div className={RecentReviewsStyle.ReviewCardProfileName}>
            {props.name}
          </div>
          <div className={RecentReviewsStyle.RecentReviewsProfileIdentity}>
            @{props.username} <span style={{ fontSize: "xx-large" }}>·</span>{" "}
            {props.walletAddress}
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const ReviewCards: ReviewCardProps[] = [
    {
      profilepic: "/BlogImage.png",
      name: "Sample Name",
      username: "username",
      walletAddress: "0x147854b65B044c8DA3E81dCa231AFdeD08f26310",
      description:
        "aba Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam.",
    },
    {
      profilepic: "/BlogImage.png",
      name: "Sample Name",
      username: "username",
      walletAddress: "0x147854b65B044c8DA3E81dCa231AFdeD08f26310",
      description:
        "aba Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam.",
    },
    {
      profilepic: "/BlogImage.png",
      name: "Sample Name",
      username: "username",
      walletAddress: "0x147854b65B044c8DA3E81dCa231AFdeD08f26310",
      description:
        "aba Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam.",
    },
    {
      profilepic: "/BlogImage.png",
      name: "Sample Name",
      username: "username",
      walletAddress: "0x147854b65B044c8DA3E81dCa231AFdeD08f26310",
      description:
        "aba Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam.",
    },
    {
      profilepic: "/BlogImage.png",
      name: "Sample Name",
      username: "username",
      walletAddress: "0x147854b65B044c8DA3E81dCa231AFdeD08f26310",
      description:
        "aba Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam.",
    },
    {
      profilepic: "/BlogImage.png",
      name: "Sample Name",
      username: "username",
      walletAddress: "0x147854b65B044c8DA3E81dCa231AFdeD08f26310",
      description:
        "aba Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae hic ullam eveniet recusandae amet voluptatem illo nulla? Incidunt, sequi alias. Vero excepturi voluptas quae, eaque consequatur tenetur modi magnam.",
    },
  ];

  return (
    <div className={RecentReviewsStyle.RecentReviews}>
      <h1>Recent Reviews</h1>

      <Marquee
        className={RecentReviewsStyle.RecentReviewsContainer}
        pauseOnHover={true}
      >
        {ReviewCards.map((item, index) => (
          <ReviewCard
            key={"ReviewCard0" + index}
            profilepic={item.profilepic}
            name={item.name}
            username={item.username}
            walletAddress={item.walletAddress}
            description={item.description}
          />
        ))}
      </Marquee>

      <Marquee
        className={RecentReviewsStyle.RecentReviewsContainer}
        direction="right"
        pauseOnHover={true}
      >
        {ReviewCards.map((item, index) => (
          <ReviewCard
            key={"ReviewCard0" + index}
            profilepic={item.profilepic}
            name={item.name}
            username={item.username}
            walletAddress={item.walletAddress}
            description={item.description}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default HeroSection;
