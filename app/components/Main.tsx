"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Main = () => {
  const onScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Title</h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={onScroll}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src={"/hero.png"}
              fill
              alt="png"
              className="object-contain"
            />
            <div className="hero__image-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
