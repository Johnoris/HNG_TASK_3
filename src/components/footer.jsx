import {FACEBOOK_ICON, FOOTER_LOGO, INSTAGRAM_ICON, TWITTER_ICON, COPYRIGHT_ICON} from '../assets/image'
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__section-1">
                <div className="footer__section-1__logo">
                    <img src={FOOTER_LOGO} alt="logo"/>
                </div>
                <div className="footer__section-1__social-icons">
                    <span><img src={FACEBOOK_ICON} alt="facebook"/></span>
                    <span><img src={INSTAGRAM_ICON} alt="instagram"/></span>
                    <span><img src={TWITTER_ICON} alt="twitter"/></span>
                </div>
                <div className="footer__section-1__copyright">
                    <img src={COPYRIGHT_ICON} alt="" />
                    <h5>2022 Metabnb</h5>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__links__section">
                    <div className="footer__links__section__header">
                        <h4>Community</h4>
                    </div>
                    <ul className="footer__links__section__list">
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div className="footer__links__section">
                    <div className="footer__links__section__header">
                        <h4>Places</h4>
                    </div>
                    <ul className="footer__links__section__list">
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>DLearn more</li>
                    </ul>
                </div>
                <div className="footer__links__section">
                    <div className="footer__links__section__header">
                        <h4>About us</h4>
                    </div>
                    <ul className="footer__links__section__list">
                        <li>Road map</li>
                        <li>Creators </li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;