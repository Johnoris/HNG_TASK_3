import ModalLayout from "../layout/modalLayout";
import {CLOSE_ICON, METAMASK, WALLETCONNECT} from '../assets/image'
import WalletCard from "../components/walletCard";
import { AppContext } from "../context/appContext";
import { useContext } from "react";

const ConnectWalletModal = (props) => {
    const { setWalletModalActive } = useContext(AppContext);
    return(
        <ModalLayout>
            <div className="connect-wallet" id="wallet-modal">
                <div className="connect-wallet__header">
                    <h3>Connect Wallet</h3>
                    <img src={CLOSE_ICON} alt="" onClick={() => setWalletModalActive(false)}/>
                </div>
                <div className="connect-wallet__main">
                    <h5>Choose your preferred wallet:</h5>
                    <div className="connect-wallet__main__card-wrapper">
                        <WalletCard icon={METAMASK} wallet="Metamask"/>
                        <WalletCard icon={WALLETCONNECT} wallet="WalletConnect"/>
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}
export default ConnectWalletModal;
