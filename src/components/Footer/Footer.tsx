import "../../scss/layout/_footer.scss";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="footer--items">
          <li className="footer--item">
            <h3 className="title">About us</h3>
            <p className="description">
              The five-star hotel in a beautiful European city with a modern
              restaurant, conference-hall, and art-bar.
            </p>
          </li>
          <li className="footer--item">
            <h3 className="title">News</h3>
            <p className="description">
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
          </li>
          <li className="footer--item">
            <h3 className="title">Social</h3>
            <ul className="social--list">
              <li>
                <a target="_blank" rel="noreferrer noopener nofollow" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer noopener nofollow" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer noopener nofollow" href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="wrapper">
          <p className="rights">&copy; 2021 All rights reserved. BankHotel</p>

          <a
            className="email--link"
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="mailto:mailto@gmail.com"
          >
            <p>Email</p>
            <Icon width={32} height={18} iconId="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
