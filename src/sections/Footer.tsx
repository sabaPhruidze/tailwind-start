import footerLogo from "../assets/images/footerLogo.svg";
import { socialMedia, SocialMedia } from "../constants";
import { footerLinks, FooterLinks } from "../constants";
import copyRight from "../assets/icons/copyright-sign.svg";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt=" footer logo "
              className="w-[150px] h-[46px]"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((data: SocialMedia) => (
              <div
                key={data.src}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full "
              >
                <img
                  src={data.src}
                  alt={data.alt}
                  className="w-[24px] h-[24px] hover: filters cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((data: FooterLinks) => (
            <div key={data.title}>
              <h4
                className="text-white font-montserrat text-2xl
              leading-normal font-medium mb-6"
              >
                {data.title}
              </h4>
              <ul>
                {data.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-motserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-motserrat cursor-pointer">
          <img
            src={copyRight}
            alt="copyRight icon"
            className="w-5 h-5 rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-motserrat cursor-pointer">Terms & conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
