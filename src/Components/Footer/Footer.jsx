import React, { useState, useEffect, useRef } from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/logo.png";
import Google from "../../assets/getgoogle.png";
import Appstore from "../../assets/getplaystore.png";
import { FaInstagram } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import footer from "../../assets/footer.png";
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  const ref = useRef();
  const langArray = [
    { id: 1, lang: "English" },
    { id: 2, lang: "Chinese" },
  ];
  const [lang, setLang] = useState("English");
  const [isopen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  //adds and removes event listeners for the dropdown menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="container1">
          <div className="head">
            <img src={Logo} alt="" />
          </div>

          <div className="desc">
            It's like having the entire neighborhood's kitchen in your pocket
          </div>

          <div className="info">
            Enjoy a large variety of meals, deals, and member-only features in
            GoFood app.
          </div>

          <div className="download">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={Google} alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={Appstore} alt="" />
            </a>
          </div>

          <div className="lang-select" ref={ref}>
            {isopen && (
              <div className="langlist">
                <div className="sect">
                  {langArray.map((item, id) => (
                    <div
                      className="content"
                      key={id}
                      onClick={() => {
                        setLang(item.lang), setIsOpen(false);
                      }}
                    >
                      {item.lang}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <IoLanguage className="icon1" />
            <div className="lang" onClick={() => setIsOpen(true)}>
              {lang}
            </div>
            <FaAngleDown fill="black" className="icon2" />
          </div>

          <div className="t-o-s">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Privacy policy
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Terms of service
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Follow Us <FaInstagram className="icon" />
            </a>
          </div>

          <div className="copyright">
            © 2023 Gojek | Gojek is a trademark of PT Aplikasi Karya Anak
            Bangsa. Registered in the Directorate General of Intellectual
            Property of the Republic of Indonesia.
          </div>
        </div>
        <div className="container2">
          <div className="img-cont">
            <img src={footer} alt="" className="img1" />
            <img src={footer} alt="" className="img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
