import PageLayout from "../layout/pageLayout";
import {
    HOME_TOP_IMG, 
    MBTOKEN_LOGO, 
    METAMASK_LOGO, 
    OPENSEA_LOGO, 
    ADVENTURE_IMG_1, 
    ADVENTURE_IMG_3, 
    ADVENTURE_IMG_2, 
    ADVENTURE_IMG_5, 
    ADVENTURE_IMG_6, 
    ADVENTURE_IMG_7, 
    ADVENTURE_IMG_8, 
    ADVENTURE_IMG_4, NFT_IMG
} from '../assets/image';
import AdventureCard from '../components/adventureCard';
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const router = useNavigate();

    return(
        <PageLayout>
            <div className="home">
                <div className="home__top-section">
                    <div className="home__top-section__main">
                        <h1>
                            Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                        </h1>
                        <h3>
                            we provide you access to luxury and affordable houses in the metaverse, 
                            get a chance to turn your imagination to reality at your comfort zone
                        </h3>
                        <div className="home__top-section__main__search-bar">
                            <input
                                type="text"
                                placeholder="Search for location"
                            />
                            <button onClick={() => router('/search')}>Search</button>
                        </div>
                    </div>
                    <div className="home__top-section__img">
                        <img src={HOME_TOP_IMG} alt="" />
                    </div>
                </div>
                <div className="home__partners">
                    <span><img src={MBTOKEN_LOGO} alt="MB Token"/></span>
                    <span><img src={METAMASK_LOGO} alt="METAMASK"/></span>
                    <span><img src={OPENSEA_LOGO} alt="OPEN SEA"/></span>
                </div>
                <div className="home__next-adventure">
                    <h2>Inspiration for your next adventure</h2>
                    <div className="home__next-adventure__adventure-card-wrapper">
                        <AdventureCard img={ADVENTURE_IMG_1}/>
                        <AdventureCard img={ADVENTURE_IMG_2}/>
                        <AdventureCard img={ADVENTURE_IMG_3}/>
                        <AdventureCard img={ADVENTURE_IMG_4}/>
                        <AdventureCard img={ADVENTURE_IMG_5}/>
                        <AdventureCard img={ADVENTURE_IMG_6}/>
                        <AdventureCard img={ADVENTURE_IMG_7}/>
                        <AdventureCard img={ADVENTURE_IMG_8}/>
                    </div>
                </div>
                <div className="home__nft">
                    <div className="home__nft__text">
                        <h2>Metabnb NFTs</h2>
                        <h4>
                            Discover our NFT gift cards collection. 
                            Loyal customers gets amazing gift cards which are traded as NFTs. 
                            These NFTs gives our cutomer access to loads of our exclusive services.
                        </h4>
                        <button>Learn more</button>
                    </div>
                    <div className="home__nft__img">
                        <img src={NFT_IMG} alt="" />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
export default Home;