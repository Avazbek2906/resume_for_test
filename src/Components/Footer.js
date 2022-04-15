import React from "react";
import "../Styles/Footer.css";
import { ReactComponent as Logo } from "../Assets/Svg/logo.svg";
import { ReactComponent as Instagram } from "../Assets/Svg/instagram.svg";
import { ReactComponent as Telegram } from "../Assets/Svg/telegram.svg";
import { ReactComponent as Facebook } from "../Assets/Svg/facebook.svg";
import { ReactComponent as Phone } from "../Assets/Svg/phone.svg";
import { ReactComponent as Male } from "../Assets/Svg/male.svg";
import FooterImg from "../Assets/Img/footer.png";
function Footer() {
  return (
    <div className="footer_section">
      <div className="footer_content">
        <div className="footer_informs">
          <div className="footer_col1">
            <div className="footer_logo">
              <Logo />
              <span>Vakansiya edu.uz</span>
            </div>
            <text>
              Portalda eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish
              va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi
              bilan amalga oshirilishi mumkin.
            </text>
          </div>
          <div className="footer_col">
            <h3>Ish qidiruvchilarga</h3>
            <p>Rezyume qo‘shish</p>
            <p>Ish qidirish</p>
            <p>Oliy ta’lim muassasalari</p>
            <p>Xorijiy oliy ta’lim muassasalari</p>
          </div>
          <div className="footer_col">
            <h3>Biz ijtimoiy tarmoqlarda</h3>
            <p>
              <Instagram /> Instagram
            </p>
            <p>
              <Telegram /> Telegram
            </p>
            <p>
              <Facebook /> Facebook
            </p>
          </div>
          <div className="footer_col">
            <h3>Bog’lanish</h3>
            <p>
              <Phone /> +998336959550
            </p>
            <p>
              <Phone /> +998336959550
            </p>
            <p>
              <Male /> aviapack@gmail.com
            </p>
          </div>
        </div>
        <div className="footer_line"></div>
        <div className="footer_description">
          <p>2021 © Vakansiya edu.uz</p>
          <img src={FooterImg} alt="error img" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
