import React from "react";
import FeatureSectionStyle from "./FeatureSection.module.scss";

const HeroSection = () => {
  return (
    <div className={FeatureSectionStyle.FeatureSection}>
      <div className={FeatureSectionStyle.DomainProfile}>
        <img src="/DomainProfileImage.svg" alt="" />
        <h3>Domain Profile</h3>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
          consequuntur officia enim. Voluptate ut asperiores ab voluptatum quasi
          quo, enim libero officia illum quam cumque, repellat maiores saepe
          neque repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti cum, totam vero, non ad quos iure delectus illum
          doloremque nesciunt praesentium incidunt debitis dicta. Placeat
          suscipit iure autem itaque neque!
        </div>
      </div>

      <div className={FeatureSectionStyle.Collaboration}>
        <span>
          <img src="/HandShakeVector.svg" alt="Collab" />
        </span>
        <h3>Collaboration</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos expedita
          quae eveniet quam possimus laboriosam cupiditate accusamus, ut ducimus
          voluptatibus nisi, tempore dolor sed magnam quas repudiandae. Nostrum,
          dolore ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Facere odit eius itaque atque at sint dignissimos quae
          repudiandae amet natus, numquam cumque praesentium quidem alias
          perferendis, dolor non aspernatur repellendus!
        </div>
      </div>

      <div className={FeatureSectionStyle.Bounties}>
        <span>
          <img src="/TrophieVector.svg" alt="Collab" />
        </span>
        <h3>Bounties</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos expedita
          quae eveniet quam possimus laboriosam cupiditate accusamus, ut ducimus
          voluptatibus nisi, tempore dolor sed magnam quas repudiandae. Nostrum,
          dolore ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non nemo aperiam corporis? Placeat impedit vel temporibus ipsam. Iusto
          ullam magnam aut, aspernatur exercitationem, beatae non perspiciatis,
          nostrum qui explicabo nemo?
        </div>
      </div>

      <div className={FeatureSectionStyle.Monetization}>
        <span>
          <img src="/CoinVector.svg" alt="Collab" />
        </span>
        <div>
          <h3>Collaboration</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            expedita quae eveniet quam possimus laboriosam cupiditate accusamus,
            ut ducimus voluptatibus nisi, tempore dolor sed magnam quas
            repudiandae. Nostrum, dolore ipsam. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Exercitationem beatae sed labore
            officia nihil, reprehenderit, odit harum cum, deleniti corrupti
            pariatur non minus commodi recusandae aliquid iusto culpa quo error!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
