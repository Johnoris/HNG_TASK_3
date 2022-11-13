import { NEXT_ICON } from "../assets/image";

const WalletCard = (props) => {
    return(
        <div className="wallet-card">
            <div className="wallet-card__main">
                <img src={props.icon} alt="" />
                <h4>{props.wallet}</h4>
            </div>
            <img src={NEXT_ICON} alt=""/>
        </div>
    )
}
export default WalletCard;