import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-pureBlack relative">
      <section className="desktop:w-[80%] tablet:w-[90%] mx-auto flex desktop:flex-row desktop:gap-0 tablet:gap-8 tablet:flex-col justify-between desktop:pb-9 tablet:pb-8 desktop:pt-[75px] tablet:pt-[56px]">
        <div className="absolute w-[101px] h-[4px] bg-orange top-0" />
        <img src="../images/logo.svg" alt="logo" className="w-[143px]" />
        <div className="flex gap-[34px] text-pureWhite text-sub_title tracking-[2px]">
          <Link to="/" className="hover:text-orange hover:cursor-pointer">
            HOME
          </Link>
          <Link
            to="/headphones"
            className="hover:text-orange hover:cursor-pointer"
          >
            HEADPHONES
          </Link>
          <Link
            to="/speakers"
            className="hover:text-orange hover:cursor-pointer"
          >
            SPEAKERS
          </Link>
          <Link
            to="/earphones"
            className="hover:text-orange hover:cursor-pointer"
          >
            EARPHONES
          </Link>
        </div>
      </section>
      <section className="desktop:w-[80%] tablet:w-[90%] mx-auto flex justify-between pb-12">
        <article className=" desktop:w-1/2 tablet:w-full flex flex-col text-body text-pureWhite desktop:gap-14 tablet:gap-20">
          <p className="opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex justify-between">
            <p className="opacity-50">Copyright 2021. All Rights Reserved</p>
            <div className="desktop:hidden tablet:flex gap-4 self-center">
              <img
                src="../images/icon-facebook.svg"
                alt="facebook"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "../images/icon-facebook-active.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "../images/icon-facebook.svg")
                }
                className="h-[24px] hover: cursor-pointer"
              />
              <img
                src="../images/icon-twitter.svg"
                alt="twitter"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "../images/icon-twitter-active.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "../images/icon-twitter.svg")
                }
                className="h-[24px] hover: cursor-pointer"
              />
              <img
                src="../images/icon-instagram.svg"
                alt="instagram"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "../images/icon-instagram-active.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "../images/icon-instagram.svg")
                }
                className="h-[24px] hover: cursor-pointer"
              />
            </div>
          </div>
        </article>
        <div className="desktop:flex tablet:hidden gap-4 self-center">
          <img
            src="../images/icon-facebook.svg"
            alt="facebook"
            onMouseOver={(e) =>
              (e.currentTarget.src = "../images/icon-facebook-active.svg")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = "../images/icon-facebook.svg")
            }
            className="h-[24px] hover: cursor-pointer"
          />
          <img
            src="../images/icon-twitter.svg"
            alt="twitter"
            onMouseOver={(e) =>
              (e.currentTarget.src = "../images/icon-twitter-active.svg")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = "../images/icon-twitter.svg")
            }
            className="h-[24px] hover: cursor-pointer"
          />
          <img
            src="../images/icon-instagram.svg"
            alt="instagram"
            onMouseOver={(e) =>
              (e.currentTarget.src = "../images/icon-instagram-active.svg")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = "../images/icon-instagram.svg")
            }
            className="h-[24px] hover: cursor-pointer"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
