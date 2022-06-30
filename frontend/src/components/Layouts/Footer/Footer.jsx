import { useEffect, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";
import paymentMethods from "../../../assets/images/payment-methods.svg";
import { useLocation } from "react-router-dom";

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "https://www.TheWholeKart.com/helpcentre",
      },
      {
        name: "About Us",
        redirect: "https://www.TheWholeKart.com/about-us",
      },
      {
        name: "Careers",
        redirect: "https://www.TheWholeKartcareers.com",
      },
      {
        name: "TheWholeKart Stories",
        redirect: "https://stories.TheWholeKart.com",
      },
      {
        name: "Press",
        redirect: "https://stories.TheWholeKart.com/category/top-stories/news",
      },
      {
        name: "TheWholeKart Wholesale",
        redirect: "https://www.TheWholeKartwholesale.com",
      },
      {
        name: "Corporate Information",
        redirect: "https://www.TheWholeKart.com/corporate-information",
      },
    ],
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "https://www.TheWholeKart.com/pages/payments",
      },
      {
        name: "Shipping",
        redirect: "https://www.TheWholeKart.com/pages/shipping",
      },
      {
        name: "Cancellation & Returns",
        redirect:
          "https://www.TheWholeKart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect:
          "https://www.TheWholeKart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      },
    ],
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "https://www.TheWholeKart.com/pages/returnpolicy",
      },
      {
        name: "Terms Of Use",
        redirect: "https://www.TheWholeKart.com/pages/terms",
      },
      {
        name: "Security",
        redirect: "https://www.TheWholeKart.com/pages/paymentsecurity",
      },
      {
        name: "Privacy",
        redirect: "https://www.TheWholeKart.com/pages/privacypolicy",
      },
      {
        name: "Sitemap",
        redirect: "https://www.TheWholeKart.com/sitemap",
      },
      {
        name: "EPR Compliance",
        redirect: "https://www.TheWholeKart.com/pages/ewaste-compliance-tnc",
      },
    ],
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/TheWholeKart",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/TheWholeKart",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/TheWholeKart",
      },
    ],
  },
];

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"));
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
              {footerLinks.map((el, i) => (
                <div
                  className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5"
                  key={i}
                >
                  <h2 className="text-primary-grey mb-2 uppercase">
                    {el.title}
                  </h2>
                  {el.links.map((item, i) => (
                    <a
                      href={item.redirect}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                      key={i}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">
                  TheWholeKart Internet Private Limited,
                  <br />
                  Buildings Alyssa, Begonia &<br />
                  Clove Embassy Tech Village,
                  <br />
                  Outer Ring Road, Devarabeesanahalli Village,
                  <br />
                  Bengaluru, 560103,
                  <br />
                  Karnataka, India
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">
                  Registered Office Address:
                </h2>
                <p className="mt-2 leading-5">
                  TheWholeKart Internet Private Limited,
                  <br />
                  Buildings Alyssa, Begonia &<br />
                  Clove Embassy Tech Village,
                  <br />
                  Outer Ring Road, Devarabeesanahalli Village,
                  <br />
                  Bengaluru, 560103,
                  <br />
                  Karnataka, India <br />
                  CIN : U51109KA2012PTC066107
                  <br />
                  Telephone:{" "}
                  <a className="text-primary-blue" href="tel:18002029898">
                    1800 202 9898
                  </a>
                </p>
              </div>
            </div>
          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a
              href="https://seller.TheWholeKart.com/sell-online"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">
                <WorkIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Sell On TheWholeKart
            </a>
            <a
              href="https://brands.TheWholeKart.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">
                <StarsIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Advertise
            </a>
            <a
              href="https://www.TheWholeKart.com/the-gift-card-store"
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">
                <CardGiftcardIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Gift Cards
            </a>
            <a
              href="https://www.TheWholeKart.com/helpcentre"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">
                <HelpIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Help Center
            </a>

            <span>&copy; 2007-{new Date().getFullYear()} TheWholeKart.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
