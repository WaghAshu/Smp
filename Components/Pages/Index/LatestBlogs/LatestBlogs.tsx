import React from "react";
import LatestBlogsStyle from "./LatestBlogs.module.scss";

const HeroSection = () => {
  const BlogList = [
    {
      image: "/BlogImage.png",
      title: "Web3 Talk with NFT Boy Om Gurram",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in ullam aliquid nobis voluptate amet, quia autem voluptatum reiciendis tempore deserunt, eum cum. Repellat blanditiis odio quod totam cumque amet.",
      tags: ["NFT", "Crypto Currency", "Web3"],
      link: "",
    },
    {
      image: "/BlogImage.png",
      title: "title",
      description:
        "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in ullam aliquid nobis voluptate amet, quia autem voluptatum reiciendis tempore deserunt, eum cum. Repellat blanditiis odio quod totam cumque amet.",
      tags: ["NFT", "Crypto Currency", "Web3"],
      link: "",
    },

    {
      image: "/BlogImage.png",
      title: "title",
      description:
        "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in ullam aliquid nobis voluptate amet, quia autem voluptatum reiciendis tempore deserunt, eum cum. Repellat blanditiis odio quod totam cumque amet.",
      tags: ["NFT", "Crypto Currency", "Web3"],
      link: "",
    },

    {
      image: "/BlogImage.png",
      title: "title",
      description:
        "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in ullam aliquid nobis voluptate amet, quia autem voluptatum reiciendis tempore deserunt, eum cum. Repellat blanditiis odio quod totam cumque amet.",
      tags: ["NFT", "Crypto Currency", "Web3"],
      link: "",
    },

    {
      image: "/BlogImage.png",
      title: "title",
      description:
        "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in ullam aliquid nobis voluptate amet, quia autem voluptatum reiciendis tempore deserunt, eum cum. Repellat blanditiis odio quod totam cumque amet.",
      tags: ["NFT", "Crypto Currency", "Web3"],
      link: "",
    },
  ];

  return (
    <div className={LatestBlogsStyle.LatestBlogs}>
      <div className={LatestBlogsStyle.LatestBlogsHeading}>Latest Blog</div>
      <div className={LatestBlogsStyle.LatestBlogsHeading}>Older Blog</div>
      <div className={LatestBlogsStyle.MostRecentBlog}>
        <img
          src={BlogList[0].image}
          alt="Blog Image"
          className={LatestBlogsStyle.MostRecentBlogImage}
        />
        <div className={LatestBlogsStyle.BlogTags}>
          {BlogList[0].tags.map((item, index) => {
            return (
              <div
                key={"LatestBlogTag0" + index}
                className={LatestBlogsStyle.BlogTag}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className={LatestBlogsStyle.BlogHeading}>{BlogList[0].title}</div>
        <div className={LatestBlogsStyle.BlogDescription}>
          {BlogList[0].description}
        </div>
        <div className={LatestBlogsStyle.MostRecentBlogReadMore}>
          Read More &#8594;
        </div>
      </div>

      {BlogList.map((item, index) => {
        if (index !== 0)
          return (
            <div className={LatestBlogsStyle.RecentBlog}>
              <div className={LatestBlogsStyle.RecentBlogImage}>
                <img src={item.image} alt="Blog Image" />
              </div>
              <div className={LatestBlogsStyle.RecentBlogInfo}>
                <div className={LatestBlogsStyle.BlogTags}>
                  {item.tags.map((tagItem, tagIndex) => {
                    return (
                      <div
                        key={`LatestBlogTag${index}${tagIndex}`}
                        className={LatestBlogsStyle.BlogTag}
                      >
                        {tagItem}
                      </div>
                    );
                  })}
                </div>
                <div className={LatestBlogsStyle.BlogHeading}>{item.title}</div>
                <div className={LatestBlogsStyle.BlogDescription}>
                  {item.description}
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default HeroSection;
