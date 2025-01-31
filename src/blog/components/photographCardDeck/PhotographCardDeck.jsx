import toUriTitle from "../../util/toUriTitle";
import PhotographCard from "../photographCard/PhotographCard";
import './photograph-card-deck.css';


const PhotographCardDeck = ({ cardObjects }) => {

    console.log(cardObjects);

    return (
        <div className="photograph-card-deck">
            {
                cardObjects.map((item, index) => (
                    <a key={index} href={`/photopage?name=${toUriTitle(item.title)}`}>
                        <PhotographCard cardData={item} />
                    </a>
                ))
            }
        </div>
    );
}

export default PhotographCardDeck;
