import PageLayout from "../layout/pageLayout"
import {LOCATION_ICON, ADVENTURE_IMG_5, ADVENTURE_IMG_6, ADVENTURE_IMG_7, ADVENTURE_IMG_8, ADVENTURE_IMG_1, ADVENTURE_IMG_2, ADVENTURE_IMG_3, ADVENTURE_IMG_4, ADVENTURE_IMG_9, ADVENTURE_IMG_10, ADVENTURE_IMG_11, ADVENTURE_IMG_12, ADVENTURE_IMG_13, ADVENTURE_IMG_14, ADVENTURE_IMG_15, ADVENTURE_IMG_16} from '../assets/image'
import AdventureCard from "../components/adventureCard";

const SearchPage = () => {
    return(
        <PageLayout>
            <div className="search-page">
                <div className="search-page__header">
                    <ul>
                        <li>Resturant</li>
                        <li>Cottage</li>
                        <li className="sm-none">Castle</li>
                        <li className="sm-none">fantast city</li>
                        <li className="md-none">beach</li>
                        <li className="md-none">Carbins</li>
                        <li className="md-none">Off-grid</li>
                        <li className="md-none">Farm</li>
                    </ul>
                    <button>
                        Location
                        <img src={LOCATION_ICON} alt="" />
                    </button>
                </div>
                <div className="search-page__card-wrapper">
                    <AdventureCard img={ADVENTURE_IMG_5}/>
                    <AdventureCard img={ADVENTURE_IMG_6}/>
                    <AdventureCard img={ADVENTURE_IMG_7}/>
                    <AdventureCard img={ADVENTURE_IMG_8}/>
                    <AdventureCard img={ADVENTURE_IMG_1}/>
                    <AdventureCard img={ADVENTURE_IMG_2}/>
                    <AdventureCard img={ADVENTURE_IMG_3}/>
                    <AdventureCard img={ADVENTURE_IMG_4}/>
                    <AdventureCard img={ADVENTURE_IMG_9}/>
                    <AdventureCard img={ADVENTURE_IMG_10}/>
                    <AdventureCard img={ADVENTURE_IMG_11}/>
                    <AdventureCard img={ADVENTURE_IMG_12}/>
                    <AdventureCard img={ADVENTURE_IMG_13}/>
                    <AdventureCard img={ADVENTURE_IMG_14}/>
                    <AdventureCard img={ADVENTURE_IMG_15}/>
                    <AdventureCard img={ADVENTURE_IMG_16}/>
                </div>
            </div>
        </PageLayout>
    )
}
export default SearchPage;