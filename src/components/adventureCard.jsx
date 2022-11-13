import { FIVE_STAR} from '../assets/image';

const AdventureCard = (props) => {
    return(
        <div className="adventure-card">
            <div className="adventure-card__img">
                <img src={props.img} alt="" />
            </div>
            <div className="adventure-card__bottom">
                <div className="adventure-card__bottom__section-1">
                    <p>Desert king</p>
                    <h6>1MBT per night</h6>
                </div>
                <div className="adventure-card__bottom__section-2">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                </div>
                <div className="adventure-card__bottom__section-3">
                    <img src={FIVE_STAR} alt="" />
                </div>
            </div>
        </div>
    )
}
export default AdventureCard;