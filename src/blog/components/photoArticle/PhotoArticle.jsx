import './photo-article.css';



const PhotoArticle = ({nameData}) => {
    
    return (

        <div className="photo-article">
            <h1>{nameData.title}</h1>

            <section>
                <figure className="article-figure">
                    <img
                    src={nameData.imgUrl}
                    alt={nameData.title}
                    />
                </figure>

                <div>
                    <h2>Indíttatásaim</h2>
                    <p>{nameData.summary}</p>
                    <p>{nameData.content}</p>
                </div>

            </section>
        </div>
    )
}

export default PhotoArticle;