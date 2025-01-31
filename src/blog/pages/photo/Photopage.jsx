import toUriTitle from "../../util/toUriTitle";
import photographData from '../../assets/json/photograph.json';
import PhotoArticle from "../../components/photoArticle/PhotoArticle";

const Photopage = () => {

    const queryString = window.location.search;
    // console.log(queryString);

    const queryParam = new URLSearchParams(queryString);

    const photoName = queryParam.get('name').toLowerCase();
    
    let nameData = photographData.find(item => toUriTitle(item.title) === photoName);

    if (!nameData) {
        nameData = photographData[0];
    }


    return (
        <div className="container app-area">
            <PhotoArticle nameData={nameData} photoGraphs={photographData} />
        </div>
    );
}

export default Photopage;