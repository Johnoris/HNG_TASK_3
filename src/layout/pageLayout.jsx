import { useContext } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { AppContext } from "../context/appContext";
import ConnectWalletModal from '../modal/connectWalletModal'

const PageLayout = ({children}) => {
    const { walletModalActive } = useContext(AppContext);

    return(
        <div className="page-layout">
            { walletModalActive && <ConnectWalletModal /> }
            <Nav/>
            <div className="page-layout__conternt">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
export default PageLayout;