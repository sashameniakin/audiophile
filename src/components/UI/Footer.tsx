import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-pureBlack">
      <section className="w-[80%] mx-auto flex justify-between pb-9 pt-[75px]">
        <img src="../images/logo.svg" alt="logo" />
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
      <section className="w-[80%] mx-auto flex justify-between pb-12">
        <article className=" w-1/2 flex flex-col text-body text-pureWhite opacity-50 gap-14">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </article>
        <div className="flex gap-4 self-center">
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
