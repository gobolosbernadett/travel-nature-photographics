import './photograph-card.css'

const PhotographCard = ({ cardData }) => {

    console.log(cardData);

    return (
        <div className='photograph-card'>
            <figure>
                <img src={cardData.imgUrl} alt={cardData.title} />
            </figure>

            <section>
                <h4>{cardData.title}</h4>
                <p>{cardData.summary}</p>
            </section>
        </div>
    );
}

export default PhotographCard;