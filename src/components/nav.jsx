import { useContext, useState } from 'react';
import {LOGO, MENU_ICON, MENU_CLOSE_ICON} from '../assets/image';
import { AppContext } from '../context/appContext';

const Nav = () => {
    const { setWalletModalActive } = useContext(AppContext);
    const [ menuActive, setMenuActive ] = useState(false)
    return(
        <nav className="nav">
            <div className="nav__logo">
                <img src={LOGO} alt="logo" />
            </div>
            <div className="nav__links">
                <ul>
                    <li>Home</li>
                    <li>Place to stay</li>
                    <li>NFTs</li>
                    <li>Community</li>
                </ul>
                <button onClick={() => setWalletModalActive(true)}>Connect wallet</button>
                <img src={MENU_ICON} onClick={() => setMenuActive(true)} alt=""/>
            </div>
            { menuActive &&
                <div className="nav__sm__menu">
                    <img src={MENU_CLOSE_ICON} onClick={() => setMenuActive(false)} alt=""/>
                    <ul>
                        <li>Home</li>
                        <li>Place to stay</li>
                        <li>NFTs</li>
                        <li>Community</li>
                    </ul>
                    <button onClick={() => { setWalletModalActive(true); setMenuActive(false)}}>Connect wallet</button>
                </div>
            }
        </nav>
    )
}
export default Nav;