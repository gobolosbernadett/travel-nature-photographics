
import PhotographCardDeck from '../../components/photographCardDeck/PhotographCardDeck';
import './homepage.css';

import photographData from '../../assets/json/photograph.json';
import HomepageArticle from '../../components/homePageArcticle/HomepageArticle';

const Homepage = () => {

    const photoType = photographData.slice(0, 2).map( item => ({
        title: item.title,
        summary: item.summary,
        imgUrl: item.imgUrl,
    }));

    return (
        <div className="container homepage">
            <HomepageArticle />

            <PhotographCardDeck cardObjects={photoType} />
        </div>
    );
}

export default Homepage;