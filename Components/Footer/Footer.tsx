import React from "react";
import FooterStyle from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={FooterStyle.Footer}>
      <div className={FooterStyle.FooterSection1}>
        <div className={FooterStyle.FooterLogo}>
          <img src="/FooterLogo.svg" alt="FooterLogo" />
          <h1>Actual01</h1>
        </div>

        <div className={FooterStyle.FooterNewsletter}>
          <h2>Subscribe to our News-Letter For more Web3 opportunities</h2>
          <div>
            <input type="text" name="" id="" placeholder="What's Your Email?" />
            <span>
              <button>
                <img src="/ArrowVector.svg" alt="Submit" />
              </button>
            </span>
          </div>
        </div>
        <div className={FooterStyle.FooterCopyright1}>
          ©️ 2023 Actual01. All Rights Reserved
        </div>
      </div>
      <div className={FooterStyle.FooterSection2}>
        <div className={FooterStyle.FooterLinks}>
          <h2>Quick Links</h2>
          <Link href={"/about"}>About</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"#"}>Connect</Link>
          <Link href={"#"}>Cards</Link>
        </div>
        <div className={FooterStyle.FooterLinks}>
          <h2>Quick Links</h2>
          <Link href={"#"}>
            <img src="/TwitterVector.svg" alt="" />
            Twitter
          </Link>
          <Link href={"#"}>
            <img src="/InstaVector.svg" alt="" />
            Instagram
          </Link>
          <Link href={"#"}>
            <img src="/LinkedinVector.svg" alt="" />
            Linkedin
          </Link>
          <Link href={"#"}>
            <img src="/DiscordVector.svg" alt="" />
            Discord
          </Link>
        </div>
      </div>

      <div className={FooterStyle.FooterCopyright2}>
        ©️ 2023 Actual01. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
