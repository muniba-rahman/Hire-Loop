import React from "react";
import { FONT_COLOR_BLUE } from "../../constants/color_constants";
import "./Footer.css";
import aicLogo from "../../images/AIC-logo.png";
import { HOME_PAGE } from "../../constants/string_constants";

const Footer = () => {
  const { footer } = HOME_PAGE;
  return (
    <div>
      <div className={"footer_container"}>
        <div className={"sub_container"}>
          <img className={"logo_aic"} src={aicLogo} />
          <br />
          <b style={{ width: "80%" }}>{footer.logoSubtext}</b>
        </div>
        <div className={"sub_container , contact_info"}>
          <h1>Contact Info</h1>
          <ul>
            <li>
              <div>
                <i
                  className={"bi bi-geo-alt-fill"}
                  style={{ color: FONT_COLOR_BLUE }}
                />
              </div>
              <a href={"https://goo.gl/maps/dgkSNHBbpeuTdRdF6"}>
                {footer.contactInfo.address}
              </a>
            </li>
            <li>
              <div>
                <i
                  className={"bi bi-telephone-fill"}
                  style={{ color: FONT_COLOR_BLUE }}
                />
              </div>
              {footer.contactInfo.phone}
            </li>
            <li>
              <div>
                <i
                  className={"bi bi-envelope-fill"}
                  style={{ color: FONT_COLOR_BLUE }}
                />
              </div>
              <a href={"mailto:info.aiclub@gmail.com?"}>
                {footer.contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
        <div className={"sub_container"}>
          <h1>Our Social Links</h1>
          <iframe
            name="f271174998c2124"
            data-testid="fb:page Facebook Social Plugin"
            title="fb:page Facebook Social Plugin"
            frameBorder="0"
            allowtransparency="true"
            allowFullScreen={true}
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v2.10/plugins/page.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1bfe6fc56b131%26domain%3Daiclub.rcai.pk%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Faiclub.rcai.pk%252Ff30291e23e08c24%26relation%3Dparent.parent&amp;hide_cover=false&amp;hide_cta=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Faiclubned%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=&amp;"
            style={{
              textAlign: "center",
              visibility: "visible",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
            }}
          ></iframe>
          <div className={"round_btns_container"}>
            <div className="round_btn">
              <a href="https://twitter.com/aiclub_ned">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <div className="round_btn">
              <a href="https://instagram.com/ai_clubofficial">
                <i className="bi bi-instagram" />
              </a>
            </div>
            <div className="round_btn">
              <a href="https://www.linkedin.com/company/ned-aiclub/">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className={"sub_container"}>
          <h1>Important Links</h1>
          <ul className="imp_links">
            <li>
              <a href="/aboutUs">
                <div>
                  <i className={"bi bi-caret-right-fill"} />
                  <span>About Us</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/contact_us">
                <div>
                  <i className={"bi bi-caret-right-fill"} />
                  <span>Contact Us</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/our_team">
                <div>
                  <i className={"bi bi-caret-right-fill"} />
                  <span>Our Team</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/events">
                <div>
                  <i className={"bi bi-caret-right-fill"} />
                  <span>Events</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/membership">
                <div>
                  <i className={"bi bi-caret-right-fill"} />
                  <span>Membership</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        Copyright © 2020. All Rights Reserved by{" "}
        <b style={{ color: FONT_COLOR_BLUE }}>AIC CLUB -RCAI</b>
      </footer>
    </div>
  );
};

export default Footer;
